export const findComment = (id, root) => {
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode.data.id === id) {
      return currNode;
    }
    for (let child of currNode.children) {
      queue.push(child);
    }
  }
};