// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Choose between 8 & 128 for Password Length");

  var specialChars = prompt("Do you want to use special characters? Y/N");

  var upperCase = prompt("DO YOU WANT TO USE UPPER CASE LETTERS? Y/N");

  var numbersChar = prompt("Do you want numbers in your password? Y/N");

  var lowerCase = prompt("do you want to use lower case letters? Y/N");

  var numbersChar = ['1234567890'.split('')];
  var lowerCase = ['abcdefghijklmnopqrstuvwxyz'.split('')]
  var upperCase = ['abcdefghijklmnopqrstuvwxyz'.toUpperCase.split('')];
  var specialChars = [" !\"#$%&'()*+,-./:;<=>?@^_`{|}~\\"]
  var passwordGeneration = [specialChars, upperCaseGen, numbersChar, lowerCase];

  console.log('numbersChar');
  console.log('lowerCase');
  console.log('uppercaseGen');
  console.log('specialChars');
  console.log('passwordGeneration');
}