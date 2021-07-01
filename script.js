// GET ALL INPUT TAGS
var userName = document.getElementById('usernameInput');
var userEmail = document.getElementById('emailInput');
var userPassword = document.getElementById('passwordInput');
var passwordConfirm = document.getElementById('passwordConfirmInput');

// GET ALL ERROR MESSAGE SPACE
var nameError = document.getElementById('nameText');
var emailError = document.getElementById('emailText');
var passwordError = document.getElementById('passwordText');
var confirmError = document.getElementById('passwordConfirmText');

function checkUserName() {
  if (userName.value == "") {
    userName.style.borderColor = "red";
    nameError.textContent = "Input Username";
    nameError.style.color = "red";
  } else {
    userName.style.borderColor = "green";
    nameError.textContent = "";
  }
}

function checkEmail() {
  if (userEmail.value == "") {
    userEmail.style.borderColor = "red";
    emailError.textContent = "Input Email";
    emailError.style.color = "red";
  } else if(!userEmail.value.includes('@')) {
    userEmail.style.borderColor = "red";
    emailError.textContent = "Invalid Email";
    emailError.style.color = "red";
  } else{
    userName.style.borderColor = "green";
    emailError.textContent = "";
  }
}
function checkPassword() {
  if (userPassword.value == "") {
    userPassword.style.borderColor = "red";
    passwordError.textContent = "Input Password";
    passwordError.style.color = "red";
  } else{
    userPassword.style.borderColor = "green";
    passwordError.textContent = "";
  }
}
function confirmPassword() {
  if (passwordConfirm == "") {
    passwordConfirm.style.borderColor = "red";
    confirmError.textContent = "Input Password Again";
    confirmError.style.color = "red";
  } else if (passwordConfirm.value !== userPassword.value) {
    passwordConfirm.style.borderColor = "red";
    confirmError.textContent = "Passwords Don\'t Match";
    confirmError.style.color = "red";
  } else {
    passwordConfirm.style.borderColor = "green";
    confirmError.textContent = "";
  }
}