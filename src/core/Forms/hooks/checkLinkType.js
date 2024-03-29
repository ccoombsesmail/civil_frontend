import { Twitter, Web, YouTube } from '../../../enums/link_type'
import { youTubeUrlValidator, twitterUrlValidtor } from '../../../generic/regex/urlValidators'

export default (url) => {
  const ytUrl = url?.search(youTubeUrlValidator) === -1 ? null : YouTube
  const tweetUrl = url?.search(twitterUrlValidtor) === -1 ? null : Twitter
  if (ytUrl || tweetUrl) return ytUrl || tweetUrl
  if (url) return Web
  return null
}
