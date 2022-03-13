// Assignment Code

//Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

function randomPickChar(text, numberChars = 1) {
  let randomString = "";

  for (let i = 0; i < numberChars; i++) {
    randomString += text.charAt(Math.floor(Math.random() * text.length));
  }

  return randomString;
}

var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;
var passwordLength;


function getUserPreferences(params) {
  // ask all the prompts
  let getNumber = confirm("Do you want numbers in your password?"); 
  let getUpperChar = confirm("Do you want upper case characters in your password?");
  let getLowerChar = confirm("Do you want lower case characters in your password?");
  let getSpecialChar = confirm("Do you want special characters in your password?"); 

  return {
    getNumber,
    getUpperChar,
    getLowerChar,
    getSpecialChar
  }
}

let getUserChoices = getUserPreferences(); 
console.log(getUserChoices)
if (getUserChoices.getNumber == true) { window.prompt (numberChar)
}
if (getUserChoices.getSpecialChar == true) { window.prompt (upperChar) 
}
if (getUserChoices.getLowerChar == true) { window.prompt (lowerChar)}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
