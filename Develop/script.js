// Assignment Code

var numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordTotal = [];
var passwordArray = [];

var passwordLength;
var numberChar;
var upperChar;
var lowerChar;
var specialChar;
//Get reference to the #generate element
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
   
  // Ask for user Input
  passwordLength = prompt("How many characters would you like in your password? Choose between 8 and 128")
  
    if(!passwordLength) {
    alert("This field is required"); 
    return
    
  } if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("Your password must be between 8 and 128 characters"); 
    return 

  }

  let numberChar = confirm("Do you want numbers in your password?"); 

  
  let  upperChar = confirm("Do you want upper case characters in your password?");

  
  let lowerChar = confirm("Do you want lower case characters in your password?");

  
  let specialChar = confirm("Do you want special characters in your password?"); 


  
  for (var i = 0; i < passwordLength; i++) {
    var randomnumber = passwordTotal[Math.floor(Math.random()*passwordTotal.length)];
    passwordArray = passwordArray & (randomnumber);
  }

  var password = passwordArray.join('');
  return password;

}


