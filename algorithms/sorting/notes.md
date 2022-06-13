# Some Types of Sorts 
## Elementary Sorts
- Bubble Sort
- Insertion Sort
- Selection Sort

## More Complex Algorithms, Often More Efficient Than Elementary Sorts
- Merge Sort
- Quick Sort

# Notes About Each Sort

## Bubble Sort
- Bubbling Up Largest Value using Multiple Passthroughs
- Simple Implementation, but Unefficient 
- Time Complexity - B/W - O(n) / O(n^2)
- Space Complexity - O(1)
- Procedure:
  - Compare first two elements of the array, swapping them if the preceding element is higher than the following element
  - Continue this process until reaching the lastSortedIndex (which is initialized as the index of the last element)
  - decrement the lastSortedIndex by 1 to ensure the algorithm doesn't repeatedly compare elements that are in the correct position from prev. passthrough
  - Repeat this procedure from the beginning of the array until lastSortedIndex = 0

## Selection Sort
- Procedure:
  - Scan list of items for smallest element and swap with element in first pos
  - After going through entire list, increment firstPos
  - Continue until firstPos === listLength - 1
- Time Complexity: O(n^2)
- Space Complexity: O(1)