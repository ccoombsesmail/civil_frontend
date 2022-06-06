import express from 'express'
import path from 'path'
// import dotenv from 'dotenv'
import cors from 'cors'

import expressStaticGzip from 'express-static-gzip'

// dotenv.config()
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(path.dirname(''))
const port = 8080

const app = express()
app.use(cors())
app.use(express.json({ extended: true, limit: 52428800 }))

const server = app.listen(port, () => console.log(`Listening on port ${port}`))
server.keepAliveTimeout = 65000

app.get('*.gz', (req, res, next) => {
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

// app.use('/', expressStaticGzip(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
