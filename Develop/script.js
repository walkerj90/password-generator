// Assignment Code
var passwordLength;
var numbersChar;
var specialChars;
var upperCase;
var passwordLength;
var lowerCase;
//password variables
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
//prompt choices outside of the if statement
var choices;
//conversion for letters to be all lowercase
var toUpper = function (x) {
  return x.toUpperCase();
};
//variable for uppercase conversion
alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generateCharacterPool();
  var password = [];
  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  // joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);

});

// Write password to the #password input
function generateCharacterPool() {
  passwordLength = parseInt(prompt("Choose between 8 and 128 characters to have in your password."));
  if (!passwordLength) {
    alert("This requires a value between 8 & 128");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose a number between 8 & 128"));

  } else {
    numbersChar = confirm("Do you want numbers in your password?");
    specialChars = confirm("Do you want special characters in your password?");
    upperCase = confirm("Do you want upper case letters in your password?");
    lowerCase = confirm("Do you want lower case in your password?")
  };

  if (!numbersChar && !specialChars && !upperCase && !lowerCase) {
    choices = alert("You must select at least one choice")
  }

  else if (specialChars && numbersChar && lowerCase && upperCase) {
    choices = character.concat(alphabet, alphabet2, number);
  }

  else if (specialChars && numbersChar && upperCase) {
    choices = character.concat(number, alphabet2);
  }
  else if (specialChars && numbersChar && lowerCase) {
    choices = character.concat(number, alphabet);
  }
  else if (specialChars && lowerCase && upperCase) {
    choices = character.concat(alphabet, alphabet2);
  }
  else if (numbersChar && lowerCase && upperCase) {
    choices = number.concat(alphabet, alphabet2);
  }
  // for 2 positive options 
  else if (specialChars && numbersChar) {
    choices = character.concat(numbersChar);

  } else if (specialChars && lowerCase) {
    choices = character.concat(alphabet);

  } else if (specialChars && upperCase) {
    choices = character.concat(alphabet2);
  }
  else if (lowerCase && numbersChar) {
    choices = alphabet.concat(numbersChar);

  } else if (lowerCase && upperCase) {
    choices = alphabet.concat(alphabet2);

  } else if (numbersChar && upperCase) {
    choices = number.concat(alphabet2);
  }
  // for 1 positive option
  else if (specialChars) {
    choices = character;
  }
  else if (numbersChar) {
    choices = number;
  }
  else if (lowerCase) {
    choices = alphabet;
  }
  // Created space variable to fill uppercase conversion
  else if (upperCase) {
    choices = space.concat(alphabet2);
  };
  return choices;
}

// puts the password value into the textbox
function UserInput(ps) {
  document.getElementById("password").placeholder = ps;
}

console.log(pickChoices);
console.log(choices);
