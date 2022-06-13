/*
- Scan list of items for smallest element and swap with element in first pos
  - After going through entire list, increment firstPos
  - Continue while firstPos < length of list
*/

const array = [1, 1800, 2, 9, 8, -7, 0, 14, 16, 2, 5, 1, 4, 9, 6, 5, 18, 208];

const selectionSort = (array) => {
  if (array.length <= 1) return array;

  const length = array.length;
  let firstPos = 0;
  let minIndex = 0;
  let minValue = array[0];

  while(firstPos < length) {
    for (let i = firstPos; i < length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
      }
    }

    const temp = array[minIndex];
    array[minIndex] = array[firstPos];
    array[firstPos] = temp;

    firstPos++;
    minValue = array[firstPos];
    minIndex = firstPos;
  }
  
  return array;
};

console.log(selectionSort(array));
