// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Ask for number of characters
  // if the user didn't pick 8 or more, end app with error that password needs to be 8 or more characters
// Ask yes/no for each type of character (lowercase, uppercase, numeric, special)
  // if the user says no to all, end app with error that they should pick atleast 1
// make variables for each var lowercase, uppercase, etc. (can type one big string into variable)

// for the number of characters that the user picked, randomly build the password character by character
  // generate a random number
  //grab a randonm character based on that number and append it (concatenate) to var password (password + random character)

// creating function for password generator information
function generatePassword() {
  
  // declaring variables
  var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
  var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numberChar = ["0123456789"];
  var specialChar = ["!@#$%^&*()+=?"];

  // asking for the length of the password
  var askLength = (prompt("How many characters would you like to include?"));

  while (askLength < 8 || askLength > 30) {

    alert("Password must be between 8-30 characters");
    
    var askLength = (prompt("How many characters would you like to include?"));

  }

  // asking if user would like to include various character types
  var askLowerChar = confirm("Select OK to include lowercase characters(s)");
  var askUpperChar = confirm("Select OK to include UPPERCASE character(s)");
  var askNumberChar = confirm("Select OK to include number character(s)");
  var askSpecialChar = confirm("Select OK to include special character(s)");

  // creating while loop to ensure valid inputs have been selected
  while (askLowerChar === false && askUpperChar === false && askNumberChar === false && askSpecialChar === false) {

    alert ("You must include atleast one parameter");

  var askLowerChar = confirm("Select OK to include lowercase characters(s)");
  var askUpperChar = confirm("Select OK to include UPPERCASE character(s)");
  var askNumberChar = confirm("Select OK to include number character(s)");
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

console.log(includedChar);

var randomPassword = "";

 for (var i = 0; i < askLength; i++) {

  randomPassword = includedChar[Math.floor(Math.random() * includedChar.length)];
  
  console.log(randomPassword)

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
