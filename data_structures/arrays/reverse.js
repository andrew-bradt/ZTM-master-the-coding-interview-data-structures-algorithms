// Create a function that reverses a string:
  // e.g. 'Hi my name is Andrei' to 'ierdnA si eman yM iH'

const reverse1 = (str) => {
  let reversedStr = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

const reverse2 = (str) => str.split('').reverse().join('');

console.log(reverse1('Hi my name is Andrei'));
console.log(reverse2('Hi my name is Andrei'));