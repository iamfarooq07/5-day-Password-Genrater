const inputFeild = document.getElementById('input');

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "`~!@#$%^&*()_+-=|?/>.<,':;}]{[";
const number = "1234567890";

const length = 8; // password length

function generatePassword(chars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  inputFeild.value = password;
}

// Different functions for each type
function passUpper() {
  generatePassword(UpperCase);
}

function passLower() {
  generatePassword(lowerCase);
}

function passNumber() {
  generatePassword(number);
}

function passSymbol() {
  generatePassword(symbol);
}

function passMix() {
  generatePassword(UpperCase + lowerCase + number + symbol);
}
