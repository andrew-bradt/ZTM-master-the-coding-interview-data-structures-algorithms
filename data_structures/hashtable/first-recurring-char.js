// given an array, return the first recurring element
// if no recurring element, return undefined

const firstRecurringChar = (array) => {
  const map = {};
  const earliestRecurring = {
    char: null,
    index: null
  };

  // Iterate over array and add key-value pairs of characters and indices of occurrence
  for (let i = 0; i < array.length; i++) {
    const charKey = array[i];
    
    if (!map[charKey]) {
      map[charKey] = [];
    }

    map[charKey].push(i);
  }

  // Iterate over map and keep track of which recurring character appears earliest in the array
  for (const charKey in map) {
    const {char, index} = earliestRecurring;
    
    const charIndices = map[charKey];
    const earliestIndexOfChar = charIndices[0];

    if (charIndices.length > 1 && (!char || earliestIndexOfChar < index)) {
      earliestRecurring.char = charKey;
      earliestRecurring.index = earliestIndexOfChar; 
    }
  }

  return earliestRecurring.char || undefined;
};

console.log(firstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([1, 2, 3, 4, 5, 6, 7, 8]));