const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const form = document.getElementById('evaluation-form');

submitButton.disabled = true;

function loginCheck() {
  if (userEmail.value === 'tryber@teste.com' && userPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginCheck);

function enableDisableSubmit() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', enableDisableSubmit);

function getFullname() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const div = document.createElement('div');
  const string = `Nome: ${name} ${lastname}`;
  div.innerText = string;
  return div;
}

function getData(info, id) {
  const div = document.createElement('div');
  div.innerText = info + document.getElementById(id).value;
  return div;
}

function checkGroup(info, id) {
  const div = document.createElement('div');
  const contents = document.querySelectorAll(id);
  const group = [];
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      group.push(contents[index].value);
    }
  }
  div.innerText += info;
  for (let index = 0; index < group.length; index += 1) {
    div.innerText += `${group[index]}, `;
  }
  return div;
}

function checkSelect() {
  const div = document.createElement('div');
  const select = document.getElementById('house');
  div.innerText = `Casa: ${select.value}`;
  return div;
}

function clearForm() {
  const information = document.getElementById('information');
  if (information) {
    information.remove();
  }
}

function hideForm() {
  const divs = document.querySelectorAll('#evaluation-form div');
  for (let index = 0; index < divs.length; index += 1) {
    divs[index].classList.add('hide');
  }
}

function renderData(event) {
  event.preventDefault();
  clearForm();
  hideForm();
  const information = document.createElement('div');
  information.id = 'information';
  information.appendChild(getFullname());
  information.appendChild(getData('Email: ', 'input-email'));
  information.appendChild(checkSelect());
  information.appendChild(checkGroup('Família: ', 'input[name="family"]'));
  information.appendChild(checkGroup('Matérias: ', 'input[name="subject"]'));
  information.appendChild(checkGroup('Avaliação: ', 'input[name="rate"]'));
  information.appendChild(getData('Observações: ', 'textarea'));
  form.appendChild(information);
}

submitButton.addEventListener('click', renderData);
