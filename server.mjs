import express from 'express'
import path from 'path'
// import dotenv from 'dotenv'
import cors from 'cors'

import expressStaticGzip from 'express-static-gzip'

import compress from 'compression'

// dotenv.config()
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve(path.dirname(''))
const port = 8080

const app = express()
app.use(cors())
// app.use(express.json({ extended: true, limit: 52428800 }))

const server = app.listen(port, () => console.log(`Listening on port ${port}`))
server.keepAliveTimeout = 65000

// app.get('*.js', (req, res, next) => {
//   req.url += '.gz'
//   console.log(req.url)
//   res.set('Content-Encoding', 'gzip')
//   res.set('Content-Type', 'text/javascript')
//   next()
// })

// app.get('*.css', (req, res, next) => {
//   req.url += '.gz'
//   res.set('Content-Encoding', 'gzip')
//   res.set('Content-Type', 'text/css')
//   next()
// })
// app.get('*.gz', (req, res, next) => {
//   res.set('Content-Encoding', 'gzip')
//   res.set('Content-Type', 'text/javascript')
//   next()
// })

// app.use('/', expressStaticGzip(path.join(__dirname, 'dist')))

const checkForHTML = (req) => {
  const url = req.url.split('.')
  const extension = url[url.length - 1]

  if (['/'].indexOf(extension) > -1) {
    return true // compress only .html files sent from server
  }

  return false
}

// app.use(compress({ filter: checkForHTML }))

// const encodeResToGzip = (contentType) => (req, res, next) => {
//   // req.url += '.gz'
//   res.set('Content-Encoding', 'gzip')
//   res.set('Content-Type', contentType)
//   console.log(req.url)
//   next()
// }

// app.get('*.js', encodeResToGzip('text/javascript'))
// app.get('*.gz', encodeResToGzip('text/javascript'))

// app.get('*.css', encodeResToGzip('text/css'))

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
