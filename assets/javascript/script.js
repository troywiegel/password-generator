// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// creating function for password generator information
function generatePassword() {

  // declaring variables
  var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
  var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numberChar = ["0123456789"];
  var specialChar = ["!@#$%^&*()+=?"];

  // asking user for the length of the password
  var askLength = (prompt("How many characters would you like to include?"));

  while (askLength < 8 || askLength > 30) {

    alert("Password must be between 8-30 characters");

    var askLength = (prompt("How many characters would you like to include?"));

  }

  // asking if user would like to include various character types
  var askLowerChar = confirm("Select OK to include lowercase character(s)");
  var askUpperChar = confirm("Select OK to include UPPERCASE character(s)");
  var askNumberChar = confirm("Select OK to include numeric character(s)");
  var askSpecialChar = confirm("Select OK to include special character(s)");

  // while loop to ensure valid inputs have been selected
  while (askLowerChar === false && askUpperChar === false && askNumberChar === false && askSpecialChar === false) {

    alert("You must include atleast one parameter");

    var askLowerChar = confirm("Select OK to include lowercase character(s)");
    var askUpperChar = confirm("Select OK to include UPPERCASE character(s)");
    var askNumberChar = confirm("Select OK to include numeric character(s)");
    var askSpecialChar = confirm("Select OK to include special character(s)");

  }

  // including types of characters if selected
  var includedChar = "";

  if (askLowerChar) {

    includedChar = includedChar.concat(lowerChar);

  }

  if (askUpperChar) {

    includedChar = includedChar.concat(upperChar);

  }

  if (askNumberChar) {

    includedChar = includedChar.concat(numberChar);

  }

  if (askSpecialChar) {

    includedChar = includedChar.concat(specialChar);

  }

  // variable with empty string for randomly generated password to be placed into
  var randomPassword = "";

  // for loop to generate random characters using user input(s)
  for (var i = 0; i < askLength; i++) {

    randomPassword = randomPassword + includedChar[Math.floor(Math.random() * includedChar.length)];

  }
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);