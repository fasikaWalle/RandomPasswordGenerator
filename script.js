// Assignment code here
let chars = ["!", "#", "$", "%", "&", "|", "}", "~"];
//let alpa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
//let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let newPassword = "";
let pass = {
  specialChar: "",
  alpha: "",
  uppercase: "",
  num: "",
};
let passwordLen = 0;
function generatePassword() {
  passwordLen = prompt(
    "please write length of your password between 8 and 128"
  );
  if (passwordLen >= 8 && passwordLen <= 128) {
    pass.specialChar = confirm("do you need special character?");
    if (pass.specialChar) {
      addSpechalChar();
    }
    pass.alpha = confirm("do you need alphabets?");
    if (pass.alpha) {
      addAlphabet();
    }

    pass.uppercase = confirm("do you need capital Letter? yes or no");
    if (pass.uppercase) {
      addUppercase();
    }
    pass.num = confirm("do you need number? yes or no");
    if (pass.num) {
      addNumber();
    }
    //String.fromCharCode(Math.floor(Math.random()*26)+97)  //26 65 upper //10 48//number
  } else {
    alert("please choose between 8 and 128");
    generatePassword();
  }
  checkLength();
}
function addSpechalChar() {
  newPassword += chars[Math.floor(Math.random() * chars.length)];
}
function addAlphabet() {
  if (newPassword.length < parseInt(passwordLen) && pass.alpha === true) {
    // newPassword += alpa[Math.floor(Math.random() * chars.length)];
    newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}
function addUppercase() {
  if (newPassword.length < parseInt(passwordLen) && pass.uppercase === true) {
    // newPassword += alpa[Math.floor(Math.random() * alpa.length)].toUpperCase();
    newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
}
function addNumber() {
  if (newPassword.length < parseInt(passwordLen) && pass.num === true) {
    //newPassword += numbers[Math.floor(Math.random() * numbers.length)];
    newPassword += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
}
function checkLength() {
  while (parseInt(passwordLen) !== newPassword.length) {
    addAlphabet();
    addUppercase();
    addNumber();
  }
  return newPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
<<<<<<< HEAD
var passwordText = document.querySelector("#password");

function writePassword() {
  generatePassword();
  passwordText.value = newPassword;
}
function clear() {
  passwordText.value = "";
=======
function writePassword() {
  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
>>>>>>> a29c7999edf0255171a5b698ea6e63774b15addb
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<<<<<<< HEAD
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
=======
>>>>>>> a29c7999edf0255171a5b698ea6e63774b15addb
