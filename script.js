// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
}

function generatePassword() {

  var userInput = window.prompt('Please specify the length of your new password.')

  var passwordLength = parseInt(userInput)
 
  if(isNaN(passwordLength)) {
    window.alert("That is not a number. Please input the numbers of characters you want in your password length.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be at least 8 characters long but no more that 128.")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userSymbols = window.confirm("Would you like to include special characters in your password?")

  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", ">", "<", "?"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
  
  var optionsSpecs = []
  
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
  
  if (userWantsNumbers === true) {
    optionsSpecs.push(numberList)
  }

  if (userUppercase === true) {
    optionsSpecs.push(uppercaseList)
  }

  if (userLowercase === true) {
    optionsSpecs.push(lowercaseList)
  }

  if (userSymbols === true) {
    optionsSpecs.push(symbolList)
  }

  var generatedPassword = " "


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = optionsSpecs[randomInt(0, optionsSpecs.length - 1)]
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
