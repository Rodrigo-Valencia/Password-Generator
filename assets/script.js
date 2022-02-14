// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var promptAmount = window.prompt('How many characters would you like? Minimum 8, maximum 128.');
    if (promptAmount === "" || promptAmount === null) {
        window.alert('You need to provide a valid answer! Please try again.');

        return writePassword();
    }
    
    function specialCharacters(){
        var promptspecialCharacters = window.prompt('Would you like special characters?');
        if (promptspecialCharacters === "" || promptspecialCharacters === null) {
            window.alert('You need to provide a valid answer! Please try again.');
            return specialCharacters();
        }
    }
    
    

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var characterAmount = function() {
    var promptAmount = window.prompt('How many characters would you like?');

    if (promptAmount === "" || promptAmount === null) {
        window.alert('You need to provide a valid answer! Please try again.');
        return characterAmount();
    }

    if (promptAmount === "< min" || promptAmount === "> max") {
        window.alert('Character amount must be between 8 and 128! Please try again.');
    }

}

var numberInfo = {
    min: 8,
    max: 128
}

