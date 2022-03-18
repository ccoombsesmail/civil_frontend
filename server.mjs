import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(path.dirname(''))
const port = 5000

const app = express()
app.use(cors())
app.use(express.json({ extended: true, limit: 52428800 }))

const server = app.listen(port, () => console.log(`Listening on port ${port}`))
server.keepAliveTimeout = 65000

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  console.log("RUNNING")
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
      console.log("NOT WORCKING")
    if (err) res.status(500).send(err)
  })
})
