
export const filterObject = (originalObject, keysToKeep) => {
  const filteredObject = Object.fromEntries(
    Object.entries(originalObject).filter(([key]) => keysToKeep.includes(key))
  );

  return filteredObject
}

