window.addEventListener('load', function () {
  let userInput = document.querySelector('.search__input');
  let searchBlock = document.querySelector('.search');
  let button = document.querySelector('.search__button');

  const UserArray = [
    { name: 'Oleg', age: 28 },
    { name: 'Vika', age: 20 },
    { name: 'Igor', age: 25 },
    { name: 'Kiril', age: 22 },
  ];

  let youFistName = [];

  UserArray.map(name => youFistName.push(name.name));

  searchBlock.addEventListener('click', event => {
    if (userInput.value.toLowerCase() === `google`) {
      setTimeout(() => {
        alert(`А Яндекс Круче, Но это не точно, ${youFistName[0]}`);
      }, 3000);
    } else if (event.target.className === button.className) {
      alert(`${userInput.value}, ${youFistName[0]}`);
    }
  });
});
