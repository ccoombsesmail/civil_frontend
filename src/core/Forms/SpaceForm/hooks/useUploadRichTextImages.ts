import { useCallback } from "react";

/* eslint-disable no-underscore-dangle */
export default (uploadSpaceMedia) => useCallback(async (editor) => {
  const editorState = editor.getEditorState()

  let [imageNodeKey, imageExt, imageBase64, imageBlobData, imageFile, formData, imageUrl] = [null, null, null, null, null, null, null]

  const uploadImage = new Promise((resolve, reject) => { 
    editorState._nodeMap.forEach(async (node, key, map: Map<string, any>) => {
      if (node.__type === 'image') {
        imageNodeKey = key
        imageExt = node.__src.split(';')[0].split('/')[1]
        imageBase64 = await fetch(node.__src)
        imageBlobData = await imageBase64.blob()
        imageFile = new File([imageBlobData], 'cool-file')
        formData = new FormData()
        formData.append('image', imageFile)
        if (imageNodeKey) {
          const { data } = await uploadSpaceMedia(formData, 'image', imageExt)
          imageUrl = data.imageUrl
        }
        resolve(imageUrl)
      }
      if ([...map][map.size-1][0] === key) {
        resolve(null)
      }
  })
})
  const imgUrl = await uploadImage
  editor.setEditable(true);
  editor.update(() => {
    const imageNode = editorState._nodeMap.get(imageNodeKey)
    imageNode?.setSrc(imageUrl)
  })

  return new Promise(resolve => setTimeout(() => {
    resolve(editor.getEditorState())
  }, 100))

}, [uploadSpaceMedia])
