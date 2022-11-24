export default (s) => (s ? `${s[0].toUpperCase()}${s.slice(1)}` : '')

export const capitalizeSentence = (sentence) => sentence.split(' ').map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ')
