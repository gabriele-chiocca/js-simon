const numbergenerated = generatenumbers();

const inputinserted = document.getElementById('input-group');

const messagewinornot = document.getElementById('message');

const formofanswer = document.getElementById('answers-form');

stampanumeri(numbergenerated);

function generatenumbers() {
  //Array Numeri generati
  const numbers = [];

  for (let i = 1; numbers.length < 5; i++) {
    const numGenerate = Math.floor(Math.random() * 50) + 1;

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

//Timeout e comparsa campi input

setTimeout(function () {
  document.getElementById('numbers-list').innerHTML = '';

  const answernumber = document.getElementById('answers-form');

  answernumber.classList.remove('d-none');
}, 3000);

//Verifica campi input

formofanswer.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputs = document.getElementById('input-group').children;

  const guessed = [];
  let correct = 0;

  for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i].value);

    if (numbergenerated.includes(value)) {
      if (!guessed.includes(value)) {
        guessed.push(value);
        correct++;
      }
    }
  }

  if (correct > 0) {
    messagewinornot.innerHTML =
      'Hai indovinato ' + correct + ' numeri: ' + guessed;
  } else {
    messagewinornot.innerHTML = 'Non hai indovinato nessun numero';
  }
});
