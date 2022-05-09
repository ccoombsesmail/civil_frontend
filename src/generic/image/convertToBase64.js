export const encodeImageFileAsURL = (element) => {
  const file = element.files[0]
  const reader = new FileReader()
  reader.onloadend = () => {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file)
}
