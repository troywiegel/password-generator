// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = '';

// Ask for number of characters
  // if the user didn't pick 8 or more, end app with error that password needs to be 8 or more characters
// Ask yes/no for each type of character (lowercase, uppercase, numeric, special)
  // if the user says no to all, end app with error that they should pick atleast 1
// make variables for each var lowercase, uppercase, etc. (can type one big string into variable)

// for the number of characters that the user picked, randomly build the password character by character
  // generate a random number
  //grab a randonm character based on that number and append it (concatenate) to var password (password + random character)


  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
