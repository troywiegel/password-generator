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

function generatePassword() {

  var askLength = "";
  var askLChar;
  var askUChar;
  var askNChar;
  var askSChar;
  
  var lChar = "abcdefghijklmnopqrstuvwxyz";
  var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nChar = "0123456789";
  var sChar = "!@#$%^&*()+="
  var password = '';

  var askLength = (prompt("How many characters would you like to include?"));

  while (askLength <= 7 || askLength >= 128) {

    alert("Password must be between 8-127 characters. Try again!");
    var askLength = (prompt("How many characters would you like to include?"));

  }


  for (var i = 0; i < askLength; i++) {

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
