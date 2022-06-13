/*
Procedure:
- Iterate over the array:
  - If the element at the current index is lower than the first element in the array:
    - remove the element at the current index, insert it at the beginning of the array, and shift all other array elements 
  - Otherwise, use an inner for loop to iterate over the first element to the current element
    - Iterate until the outer iterable is >= the element before the inner index and less than the element at the inner index
    - remove element at current outer index and insert it before the element at the inner index
*/

const array = [7, 3, 2, 8, 1, 1, 1, 909999, 4, 6, 5, 1];

const insertionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] >= array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

console.log(insertionSort(array));