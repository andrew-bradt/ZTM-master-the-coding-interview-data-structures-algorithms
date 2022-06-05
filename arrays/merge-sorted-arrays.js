// Merge two sorted arrays and order the items from least to greatest
// e.g. [0,3,4,31], [4, 6, 30] => [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const merged = [];
  let i1 = i2 = 0;
  let arr1Element = arr1[i1];
  let arr2Element = arr2[i2];

  while (arr1Element || arr2Element) {
    if (!arr2Element || arr1Element <= arr2Element) {
      merged.push(arr1Element);
      i1++;
      arr1Element = arr1[i1];
    } else {
      merged.push(arr2Element);
      i2++;
      arr2Element = arr2[i2];
    }
  }

  return merged;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([], [1, 2]));
console.log(mergeSortedArrays([1, 2], []));