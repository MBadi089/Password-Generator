// Assignment code here
//------------------------Global Variables---------------------------//
var lowerCase = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y,','Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//----------------------End of Global Variables----------------------//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//---------------------generatePassword function---------------------//
function getPasswordOptions() { 

//prompts the user the input the length of the password
  var passwordLength = prompt ("How long do you want your password?");

  //user has to input a number,(isNan is for stating NOT a number)
  if (isNaN(passwordLength) === true) {

    alert("Must be a number.");

    return //will go back to the prompt if the user inputs something other than a number
  }
  //if user inputs length less than 8 or greater than 128 alert will appear
  if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("How long do you want your password?");
  
  alert ("Please stay within 8-128 characters");

    return//returns back to prompt if user inputs number less than 8 or greater than 128
  }

  console.log(passwordLength)

  //create variables for user to choose certain characters they want to use with confirms (true, false)
  var userChooseNumber = confirm ("Do you want to add a number to your password?");

  var userChooseCharacter = confirm ("Do you want to add a character to your password?");

  var userChooseSymbol = confirm ("Do you want to add a symbol to your password?");

  var userChooseLowerCase = confirm ("Do you want to add a lower case character in your password?");

  //create 4 if statements if user chooses to use certain characters
  //userlowerCase will be pushed into into randomLowerCase if user chooses true
  if (userChooseLowerCase === false &&
     userChooseCharacter === false && 
     userChooseSymbol === false && 
     userChooseNumber === false)
    {
     alert ("Must have at least one character type.")
    }

  //storing the user input into a object
    var passwordOptions = {
      passwordLength: passwordLength,
      userChooseLowerCase: userChooseLowerCase,
      userChooseCharacter: userChooseCharacter,
      userChooseSymbol: userChooseSymbol,
      userChooseNumber: userChooseNumber
    };

    return passwordOptions
  };


  //---------------------function that gets a random element-----------//
  function getRandomChar() {
    //will get a lower case letter from character chart starting from 97. (26 is the number of letters in the lower case chart)
    // adding the 97 will generate the lower case letter within the 26 letters in the chart.
    var randomLowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    console.log(randomLowerCase);

    //will get a Upper case letter from character chart starting from 65. (26 is the number of letters in the Upper case chart)
    //adding the 65 will generate the Upper case letter within the 26 letters in the chart.
    var randomUpperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    console.log(randomUpperCase);

    //will get a random number from the character chart starting from 48. (10 is the amount of numbers in the chart)
    //adding 48 will generate a number within the 10 numbers in the chart
    var randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    console.log(randomNumber);

    //will get a random symbol from character chart starting from 33. (10 is the amount of numbers in the chart)
    //add 33 will generate a number within the 10 numbers in the chart
    var randomSymbol = String.fromCharCode(Math.floor(Math.random()* 10) + 33);
    console.log(randomSymbol);
  
    //storing the above variables into an object so it can be called on
    var randomChar = {
      randomLowerCase: randomLowerCase,
      randomUpperCase: randomUpperCase,
      randomNumber: randomNumber,
      randomSymbol: randomSymbol
    }
    
    return randomChar
};
//-------------------End function that gets a random element-----------//

//---------------------generatePass function--------------------------//
function generatePass() {
var options = getPasswordOptions()
var randoms = getRandomChar()
var result = [];
var possibleChar = [];
var guarenteedChar = [];

if (options.userChooseSymbol) {
  possibleChar = possibleChar.concat(randoms.randomSymbol);
  guarenteedChar.push(getRandomChar(randoms.randomSymbol))
}
if (options.userChooseCharacter) {
  possibleChar = possibleChar.concat(randoms.randomUpperCase);
  guarenteedChar.push(getRandomChar(randoms.randomUpperCase))
}
if (options.userChooseLowerCase) {
  possibleChar = possibleChar.concat(randoms.randomLowerCase);
  guarenteedChar.push(getRandomChar(randoms.randomLowerCase))
}
if (options.userChooseNumber) {
  possibleChar = possibleChar.concat(randoms.randomNumber);
  guarenteedChar.push(getRandomChar(randoms.randomNumber))
}
  for (var i = 0; i < options.passwordLength; i++) {
  var possibleChar = getRandomChar(possibleChar);
  result.push(possibleChar);
  }
  for (var i = 0; i < guarenteedChar.passwordLength; i++) {
    result[i] = guarenteedChar[i];  
  }

  console.log(result);
  return result.join('');
};
//---------------------End generatePass function------------------------//

//----------------------writePassword function--------------------------//
// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}
//---------------------End writePassword function--------------------//

//----------------Add event listener to generate button--------------//
generateBtn.addEventListener("click", writePassword);

//-------------End Add event listener to generate button-------------//