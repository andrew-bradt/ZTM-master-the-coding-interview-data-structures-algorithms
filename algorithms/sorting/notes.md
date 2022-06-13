# Some Types of Sorts 
## Elementary Sorts
- Bubble Sort
- Insertion Sort
- Selection Sort

## More Complex Algorithms, Often More Efficient Than Elementary Sorts
- Merge Sort
- Quick Sort

# Elementary Sort Notes

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

# Insertion Sort
- Useful for times when the list is already almost sorted
- Good for Small Data Sets
- Time Complexity B/W - O(n) / 
- Procedure:
  - iterate over the array, comparing element current index to previous elements:
    - place current element before first element it is lower than, and shift later elements

# Complex Sort Notes
- Merge & Quick use Divide & Conquer
- Use recursion to do work on subsets and combine the solutions
- No nested for loops, O(n log n)
  - every number needs to be compared atleast once (n)
  - only local lists need to be compared with one another (log n)

## Merge Sort
- Procedure
  - Recursively divide subsets into two parts until each subset contains one item
  - Recursively Sort each group and combine in sorted order
    - When combining, possibility of merging subsets if no additional sort needs be computed (i.e. [3, 4] can be merged with [5, 8] automatically)
- Maintains original order for elements with the same value
- Time Complexity: O(n log n)
- Space Complexity: O(n)