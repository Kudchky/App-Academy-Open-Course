/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/
function recVolume(height) {
  // Your code here
  /*let count = 0;
  let width;
  let length;
  let result;

  return (num) => {
    count++;
    if(count === 1){
    width = num;
    }
    if(count === 2) {
      length = num;
      result = height * width * length;
      return result;
    }
    if(count > 2) {
      return result;
    }

  }*/
  /*let count = 0;
  let volume = null;

  return (value) => {
    count++;
    if(volume === null){
      volume = height * value;
    } else if(count === 2) {
      volume *= value;
      return volume;
    } else {
      return volume;
    }
  }*/
  let width;
  let length;

  return (value) => {
    if(width === undefined){
      width = value;
    } else if(length === undefined){
      length = value;
      return height * length * width;
    } else {
      return height * length * width;
    }
  }
}

let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = recVolume;
} catch (e) {
  return null;
}
