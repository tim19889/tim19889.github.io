let input = document.getElementById("input");
let validateBtn = document.getElementById("validate");
let result = document.getElementById("result");
let numValidatorBox = document.getElementById("numValidatorBox");
let negativeResult = ` is <b><u>NOT</u></b> in the format of a valid US phone number.`;
let positiveResult = ` <b><u>IS</u></b> in the format of a valid US phone number.`


function telephoneCheck(str) {
 numValidatorBox.style.height === "31em" ? numValidatorBox.style.height = "20em" : null;
  
  if (str.match(/\d+/g) === null) {
    result.innerHTML = `<b>"${input.value}"</b></span>` + negativeResult;
  return false;
  }
  
  let numLength = str.match(/\d+/g).join("").length; 
  
  //Counts how many numbers are in the string. 
if (/^(?=.*[0-9])[- +()0-9]+$/.test(str) === false || numLength < 10 || numLength > 11) {
  result.innerHTML = `<b>"${input.value}"</b></span>` + negativeResult;
  return false;
} //Tests if anything other than spaces, dashes, parenthesis, or number is in the string and returns false if there is. Also validates numLength is 10 or 11. 
else if (numLength === 11 && str[0] !== "1") {
  result.innerHTML = `<b>"${input.value}"</b></span>` + negativeResult;
  return false;
}
  for (let i = 0; i < str.length; i++) {
if (str[i] === "(" && str[i+4] !== ")" || str[i] === ")" && str[i-4] !== "(" || str[i] === "-" && str[i+4] !== "-" && i < 6) {
  result.innerHTML = `<b>"${input.value}"</b></span>` + negativeResult;
  return false;
}
  }
 result.innerHTML = `<b>"${input.value}"</b></span>` + positiveResult;
  return true;
}

const showExamples = () => {
  numValidatorBox.style.height = "31em";
  result.innerHTML = `Numbers below are all examples of valid US Phone formats: <br> 
555-555-5555<br>
(555)555-5555<br>
(555) 555-5555<br>
555 555 5555<br>
5555555555<br>
1 555 555 5555`;
}