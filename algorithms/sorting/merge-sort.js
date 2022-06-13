/*
  Procedure:
  - Use recursion to repeatedly split array into halves until n number of one-element arrays are produced and sorted in ascending order
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array) => {
  if (array.length === 1) return array;

  // Recursive Case: Split array in half and pass each of them to merge
  const [left, right] = splitArray(array);
  return merge(mergeSort(left), mergeSort(right));
};

const splitArray = (array) => {
  // Determine the middle index of the array (rounding up)
  const length = array.length;
  const middleIndex = Math.ceil(length / 2);

  // Make shallow copies from 0 - middleIndex and element after middleIndex to end of array
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex, length);
  
  return [left, right];
};

const merge = (left, right) => {
  const sorted = [];
  let l = r = 0;
  const leftLength = left.length;
  const rightLength = right.length;
  
  // Iterate over each array until reaching the end of atleast one of them
  while ((l < leftLength) && (r < rightLength)) {
    const leftElement = left[l];
    const rightElement = right[r];

    // Pushing the correct value to the sorted array
    if (leftElement <= rightElement) {
      sorted.push(leftElement);
      l++;
    } else {
      sorted.push(rightElement);
      r++;
    }
  }

  // When the arrays aren't the same length, add the remaining elements that weren't compared to the end of the sorted array.
  return sorted.concat(left.slice(l)).concat(right.slice(r));
};

const answer = mergeSort(numbers);
console.log(answer);