/* 
- Procedure:
  - Compare first two elements of the array, swapping them if the preceding element is higher than the following element
  - Continue this process until reaching the lastSortedIndex (which is initialized as the index of the last element)
  - decrement the lastSortedIndex by 1 to ensure the algorithm doesn't repeatedly compare elements that are in the correct position from prev. passthrough
  - Repeat this procedure from the beginning of the array until lastSortedIndex = 1
*/

console.clear();
const array = [-9, 84, 21, 1, 18, 17, 92, 99, 8, 8, 8, 19, 12, -9128, 2, 1, 32, 3];

const bubbleSort = (array) => {
  if (array.length <= 1) return array;

  let firstIndex = 0;
  let secondIndex = 1;
  let lastSortedIndex = array.length;

  while (lastSortedIndex !== 1) {
    if (secondIndex === lastSortedIndex) {
      firstIndex = 0;
      secondIndex = 1;
      lastSortedIndex--;
    }

    if (array[firstIndex] > array[secondIndex]) {
      const temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    }

    firstIndex++;
    secondIndex++;
  }
  
  return array;
};

console.log(bubbleSort(array));