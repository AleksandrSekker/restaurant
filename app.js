let firstNameAlert = document.querySelector('#firstNameAlert');
let submit = document.querySelector('#submit');
let inputFirstName = document.querySelector('#inputFirstName');
let lastName = document.querySelector('#lastName');
let lastNameAlert = document.querySelector('#lastNameAlert');
let phoneNumberAlert = document.querySelector('#phoneNumberAlert');
let phoneNumber = document.querySelector('#phoneNumber');
let dateAlert = document.querySelector('#dateAlert');
let InputMM = document.querySelector('#InputMM');
let InputDD = document.querySelector('#InputDD');
let InputYYYY = document.querySelector('#InputYYYY');
let alertNumberOfGest = document.querySelector('#alertNumberOfGest');
let numberOfGest = document.querySelector('#numberOfGest');
let subscribeAlert = document.querySelector('#subscribeAlert');
let subscribe = document.querySelector('#subscribe');
let enterYouEmail = document.querySelector('#enterYouEmail');
subscribe.addEventListener('click', () => {
  if (enterYouEmail.value == '') {
    subscribeAlert.classList.add('alert-danger');
    subscribeAlert.classList.remove('alert-info');
    subscribeAlert.innerHTML = 'Email should be valid';
  } else {
    subscribeAlert.classList.remove('alert-danger');
    subscribeAlert.classList.add('alert-info');
    subscribeAlert.innerHTML = 'You subscribe successfully';
  }
});

submit.addEventListener('click', () => {
  if (InputFirstName.value == '') {
    InputFirstName.classList.add('border-danger');
    firstNameAlert.classList.add('alert', 'alert-danger');
    firstNameAlert.innerHTML = 'First name is required';
  } else {
    InputFirstName.classList.remove('border-danger');
    firstNameAlert.classList.remove('alert', 'alert-danger');
    firstNameAlert.innerHTML = '';
  }
  if (lastName.value == '') {
    lastName.classList.add('border-danger');
    lastNameAlert.classList.add('alert', 'alert-danger');
    lastNameAlert.innerHTML = 'Last name is required';
  } else {
    lastName.classList.remove('border-danger');
    lastNameAlert.classList.remove('alert', 'alert-danger');
    lastNameAlert.innerHTML = '';
  }
  if (phoneNumber.value == '') {
    phoneNumber.classList.add('border-danger');
    phoneNumberAlert.classList.add('alert', 'alert-danger');
    phoneNumberAlert.innerHTML = 'Phone number is required';
  } else {
    phoneNumber.classList.remove('border-danger');
    phoneNumberAlert.classList.remove('alert', 'alert-danger');
    phoneNumberAlert.innerHTML = '';
  }
  if (InputMM.value == '' || InputDD.value == '' || InputYYYY.value == '') {
    InputMM.classList.add('border-danger');
    InputDD.classList.add('border-danger');
    InputYYYY.classList.add('border-danger');
    dateAlert.classList.add('alert', 'alert-danger');
    dateAlert.innerHTML = 'Date is required';
  } else {
    InputMM.classList.remove('border-danger');
    InputDD.classList.remove('border-danger');
    InputYYYY.classList.remove('border-danger');
    dateAlert.classList.remove('alert', 'alert-danger');
    dateAlert.innerHTML = '';
  }
  if (numberOfGest.value == '') {
    numberOfGest.classList.add('border-danger');
    alertNumberOfGest.classList.add('alert', 'alert-danger');
    alertNumberOfGest.innerHTML = 'Number of guest is required';
  } else {
    numberOfGest.classList.remove('border-danger');
    alertNumberOfGest.classList.remove('alert', 'alert-danger');
    alertNumberOfGest.innerHTML = '';
  }
});
