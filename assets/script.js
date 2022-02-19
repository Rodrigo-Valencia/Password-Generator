// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['!' , '"' , '#' , '$' , '%' , '&' , "'" , '(' , ')' , '*' , '+' , ',' , '-' , '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@' , '[' , ']' , "\ " , '^' , "_" , '`' , '{' , '}' , '|' , '~' ];

function createPassword() {
    var length = prompt("Password length must be between 8 and 128 characters.");
    if ((length < 8) || (length > 128)) {
        alert("Password length must be between 8 and 128 characters.");
        createPassword();
    }

    var confirmNumbers = confirm("Do you want your password to include numbers?");
    var confirmLowerCase = confirm("Do you want your password to include lowercase letters?");
    var confirmUpperCase = confirm("Do you want your password to include uppercase letters?");
    var confirmSpecialCharacters = confirm("Do you want your password to include special characters?");
    var responses = {
        length: length,
        confirmNumbers: confirmNumbers,
        confirmLowerCase: confirmLowerCase,
        confirmUpperCase: confirmUpperCase,
        confirmSpecialCharacters: confirmSpecialCharacters
    }
    if ((!confirmNumbers) && (!confirmLowerCase) && (!confirmUpperCase) && (!confirmSpecialCharacters)) {
        alert("Password must include at least one type.");
        
    }
    

    return responses;
} 

function generatePassword() {
    var passwordChoices = createPassword();
    var possibleCombo = [];
    var finalPassword = "";

    if (passwordChoices.confirmNumbers) {
        for (var i of numbers){
            possibleCombo.push(i);
        }
    };
    if (passwordChoices.confirmLowerCase) {
        for (var i of lowerCase){
            possibleCombo.push(i);
        }
    };
    if (passwordChoices.confirmUpperCase) {
        for (var i of upperCase){
            possibleCombo.push(i);
        }
    };
    if (passwordChoices.confirmSpecialCharacters) {
        for (var i of specialCharacters){
            possibleCombo.push(i);
        }
    };

    for (var i = 0; i < passwordChoices.length; i++) {
        finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    }

    return finalPassword;
}



// Write password to the #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);