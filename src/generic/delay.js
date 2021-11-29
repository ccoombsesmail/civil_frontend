export default (t, v) => new Promise((resolve) => {
  setTimeout(resolve.bind(null, v), t)
})
