const generatePinBtn = document.querySelector('.generate-btn');
const numbersBtn = document.getElementsByClassName('btn-number');
const deleteNumberBtn = document.getElementById('delete-number');
const clearAllBtn = document.getElementById('clear-all');
const submitBtn = document.querySelector('.submit-btn');
const randomNumberDisplay = document.getElementById('random-number-display');

//HIDE NOTIFY SECTION
(function hideMessage() {
  document.querySelector('#failed-message').style.display = 'none';
  document.querySelector('#success-message').style.display = 'none';
})();

//GENERATING PIN AND VALIDATING
if (generatePinBtn) {
  generatePinBtn.addEventListener('click', function (event) {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    randomNumberDisplay.value = randomNumber;
  });
}

//GIVING USER INPUT
for (const button of numbersBtn) {
  button.addEventListener('click', (event) => {
    appendNumber(button.innerText);
  });
}

//APPEND NUMBERS ONE BY ONE AND UPDATE DISPLAY
function appendNumber(buttonNumber) {
  let currentNumber = document.getElementById('current-operand-display').value;
  document.getElementById('current-operand-display').value =
    currentNumber.toString() + buttonNumber.toString();
}

//DELETE NUMBER OPERATION
if (deleteNumberBtn) {
  deleteNumberBtn.addEventListener('click', function (event) {
    let currentValue = document.getElementById('current-operand-display').value;
    document.getElementById(
      'current-operand-display'
    ).value = currentValue.toString().slice(0, -1);
  });
}

//CLEAR ALL VALUE
if (clearAllBtn) {
  clearAllBtn.addEventListener('click', function (event) {
    document.getElementById('current-operand-display').value = '';
  });
}

//SUBMIT RESULT
if (submitBtn) {
  submitBtn.addEventListener('click', function (event) {
    const randomNumber = document.getElementById('random-number-display').value;
    const userGivenNumber = document.getElementById('current-operand-display')
      .value;

    if (randomNumber == userGivenNumber) {
      document.querySelector('#failed-message').style.display = 'none';
      document.querySelector('#success-message').style.display = 'block';
      document.getElementById('current-operand-display').value = '';
      document.getElementById('random-number-display').value = '';
    } else {
      document.querySelector('#success-message').style.display = 'none';
      document.querySelector('#failed-message').style.display = 'block';
      document.getElementById('current-operand-display').value = '';
      decreaseChances();
    }
  });
}

//TRY BUTTON
function decreaseChances() {
  const chanceNumber = document.getElementById('chances').innerText;

  const decreasedNumber = parseInt(chanceNumber) - 1;
  if (decreasedNumber <= 0) {
    alert(
      'You have wasted all of you chances please try again with another number'
    );
    location.reload();
  }
  document.getElementById('chances').innerText = decreasedNumber;
}
