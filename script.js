// Assignment code here
var passwordLength = 8;
var password = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwyz";
var specialChar = "!@#$%^&*)(";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("password");

function generatePassword() {
  window.alert("Your password can contain an uppercase, lowercase, and special charcter.");
  var passwordLength = prompt("Your password needs to be at least 8 characters long and can not exceed 128 characters long");
  if (person == null || person =="") {
    text = "Your password does not meet the requirements";
  } else {
  }
  if (passwordLength <8 || passwordLength > 120) {
  } else {
  }
var upperCase = confirm("Would you like to include uppercase letters?");
var lowerCase = confirm("Would you like to include lowercase letters?");
var specialChar = confirm("Would you like to include special characters?");

var password ="";
if (upperCase == true) {
  password += upperCase1;
}
if (lowerCase == true) {
  password += lowerCase1;
}
if (specialChar == true) {
  password += specialChar1;
}
for (var i=0; i < passwordLength.length; i++) {
  password += specialChar(Math.floor(Math.random() + passwordLength.length));
} return password;
}

// Write password to the #password input
function writePassword() {
  var password = document.querySelector("#generate password");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
