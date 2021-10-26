import { youTubeUrlValidator, twitterUrlValidtor } from '../../../generic/regex/urlValidators'

export default (url) => {
  const ytUrl = url.search(youTubeUrlValidator) === -1 ? null : 'ytUrl'
  const tweetUrl = url.search(twitterUrlValidtor) === -1 ? null : 'tweetUrl'
  return ytUrl || tweetUrl
}
