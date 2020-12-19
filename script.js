// Assignment code here
var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = ["!", "@", "$", "%", "&", "*", "~", "#", "^", "|"];

function generatePassword() {
  var currentPassword = [];
  var pwdLength = prompt("how many password do you want?");
  if (pwdLength < 8) {
    window.prompt("please choose between 8 and 126");
  }
  if (pwdLength > 128) {
    window.prompt("please choose between 8 and 126");
  }
  var lowerCaseInclude = window.confirm("do you want lowercase?");
  addLowerCaseToPassWord(lowerCaseInclude, currentPassword, pwdLength);

  var UpperCaseInclude = window.confirm("do you want uppercase?");
  addUpperCaseToPassWord(UpperCaseInclude, currentPassword, pwdLength);

  var numberToInclude = window.confirm("do you want numbers?");
  addNmberToPassword(numberToInclude, currentPassword, pwdLength);
  var specialCharacterToInclude = window.confirm(
    "do you want special character?"
  );
  addSpecialCharacterToPassWord(specialCharacterToInclude,currentPassword,pwdLength );

  while (pwdLength > currentPassword.length) {
    addLowerCaseToPassWord(lowerCaseInclude, currentPassword, pwdLength);
    addUpperCaseToPassWord(UpperCaseInclude, currentPassword, pwdLength);
    addNmberToPassword(numberToInclude, currentPassword, pwdLength);
    addSpecialCharacterToPassWord(
      specialCharacterToInclude,
      currentPassword,
      pwdLength
    );
  }
  console.log(currentPassword);
  return currentPassword.join("");
}

function addLowerCaseToPassWord(lowerCaseInclude, currentPassword, pwdLength) {
  if (lowerCaseInclude == false || currentPassword.length >= pwdLength) {
    return;
  }
  var lowerCaseIndex = getRandomNumber(0,26);
  var lowerCaseCharacter = alphabets[lowerCaseIndex];
  // console.log(lowerCaseCharacter);
  currentPassword.push(lowerCaseCharacter);
}

function addNmberToPassword(numberToInclude, currentPassword, pwdLength) {
  if (numberToInclude == false || currentPassword.length >= pwdLength) {
    return;
  }
  var randomNumber = getRandomNumber(0,10);
  currentPassword.push(randomNumber);
}

function addUpperCaseToPassWord(UpperCaseInclude, currentPassword, pwdLength) {
  if (UpperCaseInclude == false || currentPassword.length >= pwdLength) {
    return;
  }
  var upperCaseIndex = getRandomNumber(0,26);
  var upperCaseCharacter = alphabets[upperCaseIndex].toUpperCase();
  currentPassword.push(upperCaseCharacter);
}

function addSpecialCharacterToPassWord(
  specialCharacterToInclude,
  currentPassword,
  pwdLength
) {
  console.log(pwdLength);
  if (
    specialCharacterToInclude == false ||
    currentPassword.length >= pwdLength
  ) {
    return;
  }
  var specialCharacterIndex = getRandomNumber(0,10);
  var specialCharacter = specialCharacters[specialCharacterIndex];
  currentPassword.push(specialCharacter);
}
function getRandomNumber(min, max) {
  // console.log(Math.floor(Math.random() * num) + 1);
return Math.floor(Math.random() * (max - min) + min);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordText = document.querySelector("#password");
function writePassword() {
  passwordText.value = "";
  var password = generatePassword();
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
function clear() {
  passwordText.value = "";
}
