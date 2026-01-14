const numbergenerated = generatenumbers();

const numeristampati = stampanumeri(numbergenerated);

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

function stampanumeri(numbers) {
  const numbersList = document.getElementById('numbers-list');

  numbersList.innerHTML = '';

  for (let i = 0; i < numbers.lenght; i++) {
    numbersList.innerHTML += '<li>' + numbers[i] + '</li>';
  }
}
