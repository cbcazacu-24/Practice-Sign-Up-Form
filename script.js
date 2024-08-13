const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const inputs = [firstName, lastName, email, password];

const checkFormValidity = () => {

  inputs.forEach(input => {

    document.getElementById(`${input.id}Error`).classList.remove('showError');
    document.getElementById(`${input.id}IconError`).classList.remove('showError');

    if (input.value === '') {
      document.getElementById(`${input.id}Error`).classList.add('showError');
      document.getElementById(`${input.id}IconError`).classList.add('showError');
    }
  })
}