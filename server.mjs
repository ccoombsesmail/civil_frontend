import express from 'express'
import path from 'path'
import fetch from 'node-fetch';

const __dirname = path.resolve(path.dirname(''));


const app = express()
app.use(express.json({ extended: true}));
app.set('json escape', true)
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/tweets', (req, res) => {
  const { url } = req.body
  fetch(`https://publish.twitter.com/oembed?url=${url}`)
    .then(resp => resp.json())
    .then(data => { 
      console.log(data)
      res.send(data.html)
    })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) res.status(500).send(err)
  })
})
