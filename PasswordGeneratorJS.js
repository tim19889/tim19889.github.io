let numInput = document.getElementById("numInput");
let passwordOutput = document.getElementById("password");
let copyPassword = document.getElementById("copyPassword");

const globalCharacters = [['A','B', 'C', 'D', 'E', 'F', 'G','H', 'I','J', 'K','L', 'M', 'N', 'O','P','Q','R','S', 'T','U','V', 'W','X', 'Y','Z' ], ['a', 'b','c','d','e', 'f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v', 'w',  'x',  'y','z' ],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["!", "~", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]];


let createRandomPassword = (pwLength) => {

  let upperCaseCheck = document.getElementById("upperCaseCheck");
  let lowerCaseCheck = document.getElementById("lowerCaseCheck");
  let symbolCheck = document.getElementById("symbolCheck");
  let numberCheck = document.getElementById("numberCheck");
  
  const characters = [['A','B', 'C', 'D', 'E', 'F', 'G','H', 'I','J', 'K','L', 'M', 'N', 'O','P','Q','R','S', 'T','U','V', 'W','X', 'Y','Z' ], ['a', 'b','c','d','e', 'f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v', 'w',  'x',  'y','z' ],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["!", "~", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"]];
  
const newPasswordArr = [];
let currentArrIndex;
let charsInUpperArr = 0;
let charsInLowerArr = 0;
let charsInNumbersArr = 0;
let charsInSymbolArr = 0;
  
  function createPw() {
    
    
    
  //Checks which options are selected and removes the appropriate subarrays in the characters array based on the check boxes.  
  upperCaseCheck.checked === false ? characters[0].splice(0) : null;
  lowerCaseCheck.checked === false ? characters[1].splice(0) : null;
  numberCheck.checked === false ? characters[2].splice(0) : null;
  symbolCheck.checked === false ? characters[3].splice(0) : null;
    
for (let i = 1; i <= pwLength; i++) {

  //currentArrIndex is a random number between 0 and the length of the characters array.
   currentArrIndex = Math.floor(Math.random() * characters.length)
  //Selects a random character from a random array in the characters array and pushes it into the newCharacterArr array.
  newPasswordArr.push(characters[currentArrIndex][Math.floor(Math.random() * characters[currentArrIndex].length)]);
  //If the loop tries to push something from an empty subarray of the characters array, the code below removes that undefined item.
  if (newPasswordArr[newPasswordArr.length-1] === undefined) {
  newPasswordArr.pop();
    i--;
  }
  //Code below keeps track of how many items from each subarray of the characters array are in the new password array.
  characters[0].length > 0 && characters[0].includes(newPasswordArr[newPasswordArr.length-1]) ? charsInUpperArr++ : null;
  characters[1].length > 0 && characters[1].includes(newPasswordArr[newPasswordArr.length-1]) ? charsInLowerArr++ : null;
  characters[2].length > 0 && characters[2].includes(newPasswordArr[newPasswordArr.length-1]) ? charsInNumbersArr++ : null;
  characters[3].length > 0 && characters[3].includes(newPasswordArr[newPasswordArr.length-1]) ? charsInSymbolArr++ : null;
  
  if (i === parseInt(pwLength) && pwLength > 3) {
    if (charsInUpperArr === 0 && characters[0].length > 0) {
charsInUpperArr = 0;
charsInLowerArr = 0;
charsInNumbersArr = 0;
charsInSymbolArr = 0; 
newPasswordArr.splice(0);
i = 0;
    }
    else if (charsInLowerArr === 0 && characters[1].length > 0) {
charsInUpperArr = 0;
charsInLowerArr = 0;
charsInNumbersArr = 0;
charsInSymbolArr = 0; 
newPasswordArr.splice(0);
i = 0;
    }
    else if (charsInNumbersArr === 0 && characters[2].length > 0) {
charsInUpperArr = 0;
charsInLowerArr = 0;
charsInNumbersArr = 0;
charsInSymbolArr = 0; 
newPasswordArr.splice(0);
i = 0;
    }
   else if (charsInSymbolArr === 0 && characters[3].length > 0) {
charsInUpperArr = 0;
charsInLowerArr = 0;
charsInNumbersArr = 0;
charsInSymbolArr = 0; 
newPasswordArr.splice(0);
i = 0;
    }
  }
}
}
  createPw();
  if (pwLength < 6) {
    numInput.value = 6;
  }
   else if (pwLength > 100) {
     numInput.value = 100;
  }
else {
  copyPassword.style.visibility = "visible";
  passwordDiv.style.visibility = "visible";
  passwordOutput.innerHTML = newPasswordArr.join("");
  charsInUpperArr = 0;
  charsInLowerArr = 0;
  charsInNumbersArr = 0;
  charsInSymbolArr = 0; 
  newPasswordArr.splice(0);
  characters.splice(0);
  characters.push(...globalCharacters);
}
}

const copyPass = () => {
navigator.clipboard.writeText(passwordOutput.innerHTML);
}

const decrease = () => {
numInput.value = parseInt(numInput.value) - 1;
}

const increase = () => {
  numInput.value = parseInt(numInput.value) + 1;
}
