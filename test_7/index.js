const myArray = [81, 55, 545, 446, 48754, 114, 33, 444, 41, 78];

let min = myArray[0];
let max = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] < min) {
    min = myArray[i];
  }

  if (myArray[i] > max) {
    max = myArray[i];
  }
}

console.log(max, min);
