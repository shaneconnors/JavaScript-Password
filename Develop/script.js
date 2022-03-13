// Assignment Code

var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;
var passwordLength;

//Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Ask for user Input
  passwordLength = prompt("How many characters would you like in your password? Choose between 8 and 128")
  
    if(!passwordLength) {
    alert("This field is required"); 
    return
    
  } if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("Your password must be between 8 and 128 characters"); 
    return 

  }
  
function determineanswers() {}
  // ask all the prompts
  let getNumber = confirm("Do you want numbers in your password?"); 
  if(getNumber) {
    numberChar
  }
  let getUpperChar = confirm("Do you want upper case characters in your password?");
  if(getUpperChar) {
    upperChar
  }
  let getLowerChar = confirm("Do you want lower case characters in your password?");
  if(getLowerChar) {
    lowerChar
  }
  let getSpecialChar = confirm("Do you want special characters in your password?"); 
  if(getSpecialChar) {
    specialChar
  }

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
} else (getUserChoices.getNumber == false) 
if (getUserChoices.getSpecialChar == true) { window.prompt (upperChar) 
}
if (getUserChoices.getLowerChar == true) { window.prompt (lowerChar)
}
if (getUserChoices.getSpecialChar == true) { window.prompt (specialChar)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
