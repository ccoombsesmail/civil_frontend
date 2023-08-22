export class CommentCache {
  constructor() {
    this.sizes = {}
  }

  get(index) {
    return this.sizes[index] || 0
  }

  resetCacheAtIndex(index) {
    this.sizes[index] = undefined
  }

  // size is total number of replies + parent comment currently open
  set(index, size, isRemoving) {
    if (this.sizes[index]) {
      if (isRemoving) {
        this.sizes[index] -= size
      } else this.sizes[index] += size
    } else {
      this.sizes[index] = size
    }
  }
}
