// Assignment code 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*",")","("];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generatePassword = document.querySelector("#password");


function generatePassword() {
  /* window.alert("Your password can contain an uppercase, lowercase, and special charcter."); */
  var passwordLength = parseInt(prompt("Your password needs to be at least 8 characters long and can not exceed 128 characters long. How many characters would you like your password to be?"));
  if (!passwordLength) {
    alert("You must enter a number between 8 and 128");
  } else if (passwordLength <8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128");
    return null;
  }
var confirmUpperCase = confirm("Would you like to include uppercase letters?");
var confirmLowerCase = confirm("Would you like to include lowercase letters?");
var confirmSpecialChar = confirm("Would you like to include special characters?");

if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false) {
  choices=alert("You must select atleast one charcter type.");
  return null;
}
else if (confirmUpperCase && confirmLowerCase && confirmSpecialChar) {
  choices = upperCase.concat(lowerCase, specialChar);
}
else if (confirmUpperCase && confirmLowerCase) {
  choices = upperCase.concat(lowerCase);
}
else if (confirmLowerCase && confirmSpecialChar) {
  choices = lowerCase.concat(specialChar);
}
else if (confirmUpperCase && confirmSpecialChar){
  choices = upperCase.concat(specialChar);
}
else if (confirmUpperCase) {
  choices = upperCase;
}
else if (confirmLowerCase) {
  choices = lowerCase;
}
else if (confirmSpecialChar) {
  choices = specialChar;
};
var password = [];

for (var i=0; i < passwordLength; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
} 
var passw = password.join("");
UserInput(passw);
return passw;
  }
function UserInput(passw) {
  document.getElementById("password").textContent = passw;
}




// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//}

// Add event listener to generate butto
generateBtn.addEventListener("click", function(){
  passw=generatePassword();
  document.getElementById("password").placeholder = passw;
});
