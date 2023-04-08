let input = document.getElementById("textInput");
let h2Result = document.getElementById("h2Result");
let pResult = document.getElementById("pResult");
let cipherBox = document.getElementById("cipherBox");


function rot13Decrypt(str) {
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const strArr = str.split("");

  //The include method is used to filter out any non-letters. 
for (let i = 0; i < strArr.length; i++) {
  if (alphabet.concat(alphabet).includes(strArr[i])) 
  {strArr[i] = alphabet.concat(alphabet)[alphabet.indexOf(strArr[i])+13]; 
}
}
  cipherBox.style.height = "auto";
  cipherBox.style.minHeight = "37em";
  h2Result.innerHTML = "Result";
  pResult.innerHTML = strArr.join("");
  return strArr.join("")
}

