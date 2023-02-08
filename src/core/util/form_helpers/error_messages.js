export default {
  REQUIRED: (val) => `${val} is required`,
  MIN_LENGTH: (val) => `Must be at least ${val} characters`,
  MAX_LENGTH: (val) => `Must be at most ${val} characters`,
}
