const myArray = [24654, 545, 74549869, 4456, 4546, 8454, 454, 8454, 874784, 545, 74, 447];

function findMax(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

console.log(findMax(myArray));
