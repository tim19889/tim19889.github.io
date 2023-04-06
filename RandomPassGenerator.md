---
title: PAGE TITLE HERE
layout: template
filename: RandomPassGenerator.md
--- 

<!DOCTYPE html>
<html lang="en">
  <body>
    <head>
      <link rel="stylesheet" href="passwordgeneratorstyles.css">
      <link
    rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'/>
      <title>Random Password Generator</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js">
    </script>
    </head>
<div id="pwGeneratorContainer">
  <h1 id="title" class="text">Random Password Generator</h1>
  <p id="instructions" class="text">Select below how many characters long you want your password to be. <u>Password must be between 6 - 100 characters.</u> By default it will include at least one the following:</p>
  <ul id="unorderedList" class="text">
    <li>1 Uppercase Letter</li>
    <li>1 Lowercase Letter</li>
    <li>1 Number</li>
    <li>1 Special Character</li>
  </ul><br>
  <div id="passwordDiv">
    <h2 id="password"></h2>
  </div><br>
  <button id="copyPassword" onclick="copyPass()">Copy</button>
  <h2 class="text" id="numInputTag">Password Length</h2>
  <div class="increaseDecreaseButtons" id="decreaseBtn" onclick="decrease(); createRandomPassword(numInput.value)"><</div><input type="number" id="numInput" onChange="createRandomPassword(numInput.value)" value ="10"></input><div class="increaseDecreaseButtons" id="increaseBtn" onclick="increase(); createRandomPassword(numInput.value)">></div><br>
    <h3 class="text">Uppercase</h3><input type="checkbox" id="upperCaseCheck" class="checks" checked></input>
  <h3 class="text">Lowercase</h3><input type="checkbox" class="checks" id="lowerCaseCheck" checked></input>
<h3 class="text">Symbols</h3><input type="checkbox" class="checks" id="symbolCheck" checked></input>
<h3 class="text">Numbers</h3><input type="checkbox" class="checks" id="numberCheck" checked></input>
    </div>
  </body>
</html>
