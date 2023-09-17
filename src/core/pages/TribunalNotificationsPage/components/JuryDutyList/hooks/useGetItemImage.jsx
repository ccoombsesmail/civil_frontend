import React, { useCallback} from 'react'
import { COMMENT, DISCUSSION, SPACE } from '../../../../../../enums/content_type'
import { Web, YouTube } from '../../../../../../enums/link_type'
import OgImg from '../../../../../CommonComponents/LinkMetaData/OgImg'

export const useGetItemImage = () => useCallback((contentType, content) => {
  let imgToDisplay = null
  const {
    title,
    externalContentData,
  } = content || {}
  const {linkType, embedId, externalContentUrl} = externalContentData || {}

  switch (contentType) {
    case SPACE:
      imgToDisplay = (
        <img
          className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block border-round"
      // eslint-disable-next-line max-len
          src={content.userUploadedImageUrl || 'https://media.discordapp.net/attachments/1048453486456619088/1150340898866090094/C00mbsie_Picture_a_grand_amphitheater_with_a_transparent_dome_t_e0b24fe6-1723-45b7-846b-2dd78aae6013.png?width=605&height=605'}
          alt={title}
        />
      )
      break
    case DISCUSSION:
      switch (linkType) {
        case Web:
          imgToDisplay = <OgImg rawImage className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block border-round" url={externalContentUrl} />
          break
        case YouTube:
          imgToDisplay = (
            <img
              alt="youtube video thumbnail"
              className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block border-round"
              title={title}
              src={`https://img.youtube.com/vi/${embedId}/hqdefault.jpg
            `}
            />
          )
          break
        default:
          break
      }
      break
    case COMMENT:
      imgToDisplay = (
        <img
          className="w-9 sm:w-16rem xl:w-10rem block xl:block border-round"
      // eslint-disable-next-line max-len
          src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/comments.png"
          alt={title}
        />
      )
      break
    default:
      break
  }
  return imgToDisplay
}, [])