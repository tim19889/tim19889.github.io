const invalidChars = ["E", "e", "-", "+", "."];
const validRomanNumerals = ["I", "V", "X", "L", "C", "D", "M", "BACKSPACE"];
let toggleStatus = 0; //0 = Convert to Roman. 1 = Convert to integer.
let myInput = document.getElementById("inputField");
let instruction = document.getElementById("instructions");
let descriptionText = document.getElementById("descriptionText");
let resultText = document.getElementById("result");
let title = document.getElementById("title");
let toggleButton = document.getElementById("toggleButton");

//Prevents invalid characters from being entered for integer to Roman Numeral.
myInput.addEventListener("keydown", function(e) {
 if (invalidChars.includes(e.key) && toggleStatus === 0) {
   e.preventDefault();
 }
})

//Prevents negative numbers from being entered for integer to Roman Numeral. 
myInput.addEventListener("input", function(e) {
 parseInt(e.target.value) < 1 ? myInput.value = parseInt(myInput.value) + 1 : null;
})

myInput.addEventListener("keydown", function(e) {
  if (toggleStatus === 1) 
 if (!validRomanNumerals.includes(e.key.toUpperCase()) && toggleStatus === 1) {
   e.preventDefault();
 }
})


function convertToRoman(number) {
  
  let num;
  number === undefined ? num = parseInt(myInput.value) : num = number;
  
  
  
  
 const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let rNumerals = ""; 
for (let i = 0; i < integers.length; i++) {
  while (num >= integers[i]) {
    num -= integers[i];
    rNumerals += romanNumerals[i];
  } 

descriptionText.innerHTML = `${myInput.value} in Roman Numerals is:`
resultText.innerHTML = rNumerals;
  descriptionText.style.color = "white";
resultText.style.color = "white";
}
return rNumerals;
}



function convertToInteger() {

let myNumeral = myInput.value.toUpperCase();  
  
  
 const integers = [1000, "M", 900, "CM", 500, "D", 400, "CD", 100, "C", 90, "XC", 50, "L", 40, "XL", 10, "X", 9, "IX", 5, "V", 4, "IV", 1, "I"];
let num = 0; 
let rNumArr = myNumeral.split("");

for (let i = 0; i < rNumArr.length; i++) {

if (rNumArr[i] === "I" && rNumArr[i+1] === "X") {
  rNumArr.splice(i,1);
  rNumArr[i] = "IX";
}
if (rNumArr[i] === "I" && rNumArr[i+1] === "V") {
  rNumArr.splice(i,1);
  rNumArr[i] = "IV";
}
if (rNumArr[i] === "X" && rNumArr[i+1] === "L") {
  rNumArr.splice(i,1);
  rNumArr[i] = "XL";
}
if (rNumArr[i] === "X" && rNumArr[i+1] === "C") {
  rNumArr.splice(i,1);
  rNumArr[i] = "XC";
}
if (rNumArr[i] === "C" && rNumArr[i+1] === "D") {
  rNumArr.splice(i,1);
  rNumArr[i] = "CD";
}
if (rNumArr[i] === "C" && rNumArr[i+1] === "M") {
  rNumArr.splice(i,1);
  rNumArr[i] = "CM";
}
}

for (let i = 0; i < rNumArr.length; i++) {
num += integers[integers.indexOf(rNumArr[i])-1] 
}
  
if (myNumeral === convertToRoman(num).toUpperCase())  {
descriptionText.innerHTML = `${myNumeral} converted to an Integer is:`
resultText.innerHTML = num;
  descriptionText.style.color = "white";
resultText.style.color = "white";
}
else {
descriptionText.innerHTML = "You have entered an invalid Roman Numeral. Please try again."
resultText.innerHTML = "";
descriptionText.style.color = "white";
}
return num; 
}


toggle = () => {
  if (toggleStatus === 0) {
$("#convertBtn").attr("onclick","convertToInteger()");
$("#inputField").css("text-transform", "uppercase");
myInput.type = "text";
myInput.value = "";
title.innerHTML = "Roman Numeral to Integer"
instructions.innerHTML = "Enter Roman Numeral below and click Convert.";
descriptionText.innerHTML = "";
resultText.innerHTML = "";
toggleButton.innerHTML = "Convert Integer to Roman Numeral";
invalidChars.splice(0);
  toggleStatus = 1;
  }
  else if (toggleStatus === 1) {
 $("#convertBtn").attr("onclick","convertToRoman()");
    $("#inputField").css("text-transform", "none");
 myInput.type = "number";
 myInput.value = 1;
 title.innerHTML = "Integer to Roman Numeral";
 instructions.innerHTML = "Enter number below and click Convert.";
 descriptionText.innerHTML = "";
resultText.innerHTML = "";
    toggleButton.innerHTML = "Convert Roman Numeral to Integer";
    invalidChars.push("e", "E", "-", "+");
    toggleStatus = 0;
  }
  
  
  
}
