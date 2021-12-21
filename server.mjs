import express from 'express'
import path from 'path'
import fetch from 'node-fetch'
import AWS from 'aws-sdk'
import busboy from 'connect-busboy'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'
import { google } from 'googleapis'
import ogs from 'open-graph-scraper'
import cors from 'cors'

import expressStaticGzip from 'express-static-gzip'

const BACKEND_DEV = 'http://localhost:8092/api/v1'
dotenv.config()
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(path.dirname(''))
const port = process.env.PORT || 5050

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

const app = express()
app.use(cors())
app.use(express.json({ extended: true, limit: 52428800 }))
app.use(busboy())
app.set('json escape', true)

app.listen(port, () => console.log(`Listening on port ${port}`))
app.use('/', express.static(path.join(__dirname, 'public')))

// app.use('/', expressStaticGzip(path.join(__dirname, 'public'), {
//   customCompressions: [{
//     encodingName: 'gzip',
//     fileExtension: 'gz',
//   }],
// }))

const uploadFile = (file, key) => {
  const params = {
    Bucket: 'civil-dev',
    Key: key,
    Body: file,
  }
  return s3.upload(params, (err, data) => {
    if (err) {
      throw err
    }
    return data.Location
  })
}

app.post('/api/v1/users/uploadIcon', (req, res) => {
  const { username } = req.query
  req.pipe(req.busboy)
  req.busboy.on('file', (fieldname, file) => {
    uploadFile(file, `profile_images/${username}`).promise().then((data) => {
      const body = { username, iconSrc: data.Location }
      fetch(`${BACKEND_DEV}/users/upload`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }).then((resp) => resp.json())
        .then((userData) => res.send(userData))
    })
  })
})

app.post('/api/v1/topics/upload-media', (req, res) => {
  const { fileType, fileFormat } = req.query
  const bucketFolder = fileType === 'image' ? 'topic_images' : 'topic_video'
  const returnKey = fileType === 'image' ? 'imageUrl' : 'vodUrl'
  req.pipe(req.busboy)
  req.busboy.on('file', (fieldname, file) => {
    uploadFile(file, `${bucketFolder}/${uuidv4()}.${fileFormat}`).promise().then((data) => {
      res.send({ [returnKey]: data.Location })
    })
  })
})

const API_KEY = 'AIzaSyCQYoE0xGItO1e6TEgFaAU_BEtBAkivqPI'
const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1'

app.post('/api/v1/comments/toxicity', (req, res) => {
  const { content } = req.body
  google.discoverAPI(DISCOVERY_URL)
    .then((client) => {
      const analyzeRequest = {
        comment: {
          text: content,
        },
        requestedAttributes: {
          TOXICITY: {},
          SEVERE_TOXICITY: {},
          INSULT: {},
          PROFANITY: {},
          THREAT: {},
          IDENTITY_ATTACK: {},
        },
        languages: ['en'],
      }

      client.comments.analyze(
        {
          key: API_KEY,
          resource: analyzeRequest,
        },
        (err, response) => {
          if (err) throw err
          const attrValues = Object.entries(response.data.attributeScores).reduce((acc, attr) => {
            acc[attr[0]] = attr[1].summaryScore.value
            return acc
          }, {})
          res.send(attrValues)
        },
      )
    })
    .catch((err) => {
      throw err
    })
})

app.get('/api/v1/topics/link-meta-data', (req, res) => {
  const { url } = req.query
  const options = { url }
  ogs(options, (error, results) => {
    res.send(results)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
