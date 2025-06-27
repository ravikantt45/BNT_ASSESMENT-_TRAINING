function uniqueElements(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const duplicates = arr1.filter(value => arr2.includes(value));
  return combined.filter(value => !duplicates.includes(value));
}


console.log(uniqueElements([1, 2, 3], [2, 4, 5])); 