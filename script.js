// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt('Please specify the length of your new password.')

  var passwordLength = parseInt(userInput)
 
  if(isNaN(passwordLength)) {
    window.alert("That is not a number. Please input the numbers of characters you want in your password length.")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
