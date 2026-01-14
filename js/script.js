const numbersList = document.getElementById('numbers-list');

function generatenumbers() {
  //Array Numeri generati
  const numbers = [''];

  for (let = 1; numbers.lenght < 5; i++) {
    const numGenerate = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(numGenerate)) {
      numbers.push(n);
    }
  }
  return numbers;
}
