function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  return arr.filter((e, i) => i % 2 === 1);
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  return arr.filter((e, i) => i % 2 === 1).reverse();
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const newArr = [];
  for (let i = 0; 2 ** i < arr.length; i++) {
    newArr.push(arr[2 ** i]);
  }

  return newArr;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const newArr = [];
  for (let i = 0; n ** i < arr.length; i++) {
    newArr.push(arr[n ** i]);
  }
  return newArr;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const newArr = [];
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const newArr = [];
  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
