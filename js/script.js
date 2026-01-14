const numbergenerated = generatenumbers();

stampanumeri(numbergenerated);

function generatenumbers() {
  //Array Numeri generati
  const numbers = [];

  for (let i = 1; numbers.length < 5; i++) {
    const numGenerate = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(numGenerate)) {
      numbers.push(numGenerate);
    }
  }
  return numbers;
}

//Inserisco i numeri generati random nell'ul all'interno dell'html
function stampanumeri(numbers) {
  const numbersList = document.getElementById('numbers-list');

  numbersList.innerHTML = '';

  for (let i = 0; i < numbers.length; i++) {
    numbersList.innerHTML += '<li>' + numbers[i] + '</li>';
  }
}

//Timeout

setTimeout(function () {
  document.getElementById('numbers-list').innerHTML = '';
}, 3000);
