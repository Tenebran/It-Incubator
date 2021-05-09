function superSum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(superSum(0, 99));
