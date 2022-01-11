const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

submitButton.disabled = true;

function enableDisableSubmit() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', enableDisableSubmit);
