const input = document.getElementById("palindromeInput");
const resultText = document.getElementById("H1result-text");
const pResultText = document.getElementById("pResultText");

function palindrome(str) {
  
 if (str.match(/[A-Za-z0-9]/g).join("").toLowerCase() === str.match(/[A-Za-z0-9]/g).reverse().join("").toLowerCase()) {
   resultText.innerHTML = "TRUE";
   pResultText.innerHTML = `"${input.value.toUpperCase()}" <em>is</em> a palindrome.`
 }
 else {
   resultText.innerHTML = "FALSE";
   pResultText.innerHTML = `<b>"${input.value.toUpperCase()}"</b> is <em>not</em> a palindrome.`
 }
}