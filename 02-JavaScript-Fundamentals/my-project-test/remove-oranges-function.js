function removeOranges(fruitArray) {
  for (let i = 0; i < fruitArray.length; i++) {
   // console.log("Checking index " + i + ": " + fruitArray[i]);

   if (fruitArray[i] == "orange") {
    fruitArray.splice(i, 1);
    i--;
   }
  }
  return fruitArray;
 }

 

 module.exports = removeOranges;
