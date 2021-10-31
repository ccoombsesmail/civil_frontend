import express from 'express'
import path from 'path'
import fetch from 'node-fetch'
import AWS from 'aws-sdk'
import busboy from 'connect-busboy'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';

const BACKEND_DEV = 'http://localhost:8092/api/v1'
dotenv.config()
const __dirname = path.resolve(path.dirname(''))
const port = process.env.PORT || 5000

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

const app = express()
app.use(express.json({ extended: true }))
app.use(busboy())
app.set('json escape', true)

app.listen(port, () => console.log(`Listening on port ${port}`))
app.use('/', express.static(path.join(__dirname, 'public')))

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

app.post('/api/v1/topics', (req, res) => {
  req.pipe(req.busboy)
  req.busboy.on('file', (fieldname, file) => {
    uploadFile(file, `topic_images/${uuidv4()}.png`).promise().then((data) => {
      res.send({ imageUrl: data.Location })
    })
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
