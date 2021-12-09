export default (t, v) => new Promise((resolve, reject) => {
  if (v === true) reject()
  setTimeout(resolve.bind(null, v), t)
})
