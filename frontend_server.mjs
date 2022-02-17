import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(path.dirname(''))
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json({ extended: true, limit: 52428800 }))

app.listen(port, () => console.log(`Listening on port ${port}`))
app.use('/', express.static(path.join(__dirname, 'public')))

// app.use('/', expressStaticGzip(path.join(__dirname, 'public'), {
//   customCompressions: [{
//     encodingName: 'gzip',
//     fileExtension: 'gz',
//   }],
// }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
