import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";


let hideInstructions = 1;
let globalP1Name;
let globalP2Name;
let globalP1Score = 0;
let globalP2Score = 0;
let currentScore = 10;
let runStatus = 0;
let interval;
const letterArr = [];
let row1Arr = [];
let row2Arr = [];
let row3Arr = [];
let row4Arr = [];




class MyWordle extends React.Component {
  
  constructor(props) {
    
    super(props);
    
    this.state = {
      player1: {
        name: "",
        totalScore: 0,
        currentPlayer: "*"
      },
      player2: {
        name: "",
        totalScore: 0,
        currentPlayer: ""
      },
      timerMinutes: "01",
      timerSeconds: "00",
      wordle: "",
      error: "",
      row1Letters: [],
      row2Letters: [],
      row3Letters: [],
      row4Letters: [],
      currentRow: 1,
      winLoseMessage: "",
      topMessage: "",
      currentRound: 1,
      currentTurn: 1
    }
    
    this.showHideInstructions = this.showHideInstructions.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.newGame = this.newGame.bind(this);
    this.continue = this.continue.bind(this);
    this.setWordle = this.setWordle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitWord = this.submitWord.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.helps = this.helps.bind(this);
  }
  
  showHideInstructions = () => {
   const howToPlay = document.getElementById("howToPlay");
    if (hideInstructions === 1) {
      howToPlay.style.display = "block";
      hideInstructions = 0;
    }
    else if (hideInstructions === 0) {
      howToPlay.style.display = "none";
      hideInstructions = 1;
    }
  }
  
  playAgain = () => {
    document.getElementById("player1Name").value = "";
    document.getElementById("player2Name").value = "";
    globalP1Name = "";
globalP2Name = "";
globalP1Score = 0;
globalP2Score = 0;
      this.setState({
        player1: {
        name: "",
        totalScore: 0,
        currentPlayer: "*"
      },
      player2: {
        name: "",
        totalScore: 0,
        currentPlayer: ""
      },
        timerMinutes: "02",
      timerSeconds: "00",
      wordle: "",
      error: "",
      row1Letters: [],
      row2Letters: [],
      row3Letters: [],
      row4Letters: [],
      currentRow: 1,
      winLoseMessage: "",
      topMessage: "",
      currentRound: 1,
      currentTurn: 1
      });
    newGameDiv.classList.remove("hide");
    endGame.classList.remove("show");
    
  }
  
  newGame = () => {
    
    
    const player1Name = document.getElementById("player1Name");
    const player2Name = document.getElementById("player2Name");
    const startError = document.getElementById("startError");
    const error = document.getElementById("error");
    
    if (player1Name.value.length > 0 && player2Name.value.length > 0) {
    newGameDiv.classList.add("hide");
      globalP1Name = player1Name.value;
      globalP2Name = player2Name.value;
    this.setState({
      player1: {
        name: player1Name.value,
        totalScore: this.state.player1.totalScore,
        currentPlayer: this.state.player1.currentPlayer
      },
      player2: {
        name: player2Name.value,
        totalScore: this.state.player2.totalScore,
        currentPlayer: this.state.player2.currentPlayer
      },
      error: ""
    })
      startError.style.color = "black";
      error.style.color = "blue";
      this.setState({
        topMessage: `${globalP1Name} please set the wordle for ${globalP2Name}.`
      })
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    
    else {
      startError.style.color = "red";
      this.setState({
        error: "Please enter a name for both players."
      })
    }
  }
  
  continue = () => {
    //Changes color on all letters back to white.
    for (let i = 1; i < 5; i++) {
      for (let j = 1; j < 6; j++) {
      document.getElementById(`r${i}l${j}`).style.backgroundColor = "white";
      }
    }
    clearInterval(interval);
    interval = undefined;
    winLoseDiv.style.transition = "all 0s";
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("vowelHelpContainer").innerHTML = "Vowel";
    document.getElementById("consonantHelpContainer").innerHTML = "Consonant";
    document.getElementById("error").innerHTML = "";
    document.getElementById("wordInput").style.display = "block";
    document.getElementById("wordInput").style.margin = "auto";
    $("#vowelHelpContainer").prop("disabled",false);
    $("#consonantHelpContainer").prop("disabled",false);
    $("#timeHelpContainer").prop("disabled",false);
    runStatus = 0;
    currentScore = 10;
    letterArr.splice(0);
    row1Arr.splice(0);
    row2Arr.splice(0);
    row3Arr.splice(0);
    row4Arr.splice(0);
    this.setState({
      timerMinutes: "01",
      timerSeconds: "00",
      wordle: "",
      row1Letters: [],
      row2Letters: [],
      row3Letters: [],
      row4Letters: [],
      currentRow: 1,
      winLoseMessage: ""
    })
    winLoseDiv.classList.remove("show");
    //Applies to end of turns 1, 3, and 5 and player 2.
    if (this.state.currentTurn % 2 === 1 && this.state.currentTurn < 7)
      {
      this.setState({
        player1: {
        name: this.state.player1.name,
        totalScore: this.state.player1.totalScore,
        currentPlayer: ""
      },
        topMessage: `${this.state.player2.name} please enter the wordle for ${this.state.player1.name}.`,
      player2: {
        name: this.state.player2.name,
        totalScore: this.state.player2.totalScore,
        currentPlayer: "*"
      }
      })  
      }
    //Applies to end of turns 2 and 4 and player 1.
    if (this.state.currentTurn % 2 === 0 && this.state.currentTurn < 7) {
      this.setState({
        player1: {
        name: this.state.player1.name,
        totalScore: this.state.player1.totalScore,
        currentPlayer: "*"
      },
      player2: {
        name: this.state.player2.name,
        totalScore: this.state.player2.totalScore,
        currentPlayer: ""
      },
        currentRound: this.state.currentRound + 1,
        topMessage: `${this.state.player1.name} please enter the wordle for ${this.state.player2.name}.`
      })
      
    }
    //Adds 1 to currentTurn to mark the change of turns. Happens every turn until turn 6.
    this.state.currentTurn < 6 ? this.setState({currentTurn: this.state.currentTurn + 1}) : null;
    
    //Applies to end of game.
    if (this.state.currentTurn === 6) {
      this.state.player1.totalScore > this.state.player2.totalScore ? this.setState({winLoseMessage: `Congratulations ${this.state.player1.name}, you're the winner!`}) : null;
      this.state.player1.totalScore < this.state.player2.totalScore ? this.setState({winLoseMessage: `Congratulations ${this.state.player2.name}, you're the winner!`}) : null;
      this.state.player1.totalScore === this.state.player2.totalScore ? this.setState({winLoseMessage: `Tie game! Play again to break the tie.`}) : null;
      
      endGame.classList.add("show");
    }
  }
  
  setWordle = () => {
    const playBtn = document.getElementById("playBtn");
    const wordInput = document.getElementById("wordInput");
    const error = document.getElementById("error");
    const keyPad = document.getElementById("keyPad");
    const lettersOnly = /^[a-zA-Z]+$/;
    error.style.color = "red"; 
    
    const runTimer = () => {
      
      this.state.timerSeconds !== "00" ? this.setState({timerSeconds: this.state.timerSeconds -1}) : null;
      this.state.timerSeconds === "00" ? this.setState({timerSeconds: 59, timerMinutes: `0${this.state.timerMinutes[1]-1}`}) : null;
      this.state.timerSeconds < 10 ? this.setState({timerSeconds: "0" + this.state.timerSeconds}) : null;
      
      
      if (this.state.timerMinutes === "00" && this.state.timerSeconds === "00") {
        clearInterval(interval);
        interval = undefined;
        winLoseDiv.classList.add("show");
        winLoseDiv.style.backgroundColor = "#e32d2d";
        currentScore = 0;
        //Applies to end of turns 1, 3, and 5 and player 2.
     if (this.state.currentTurn % 2 === 1) {  
       this.setState({
         player2: {
           name: this.state.player2.name,
          totalScore: this.state.player2.totalScore,
          currentPlayer: this.state.player2.currentPlayer
         }
       })
    this.setState({
      winLoseMessage: `Time's up! Sorry, better luck next round ${this.state.player2.name}. Your current score is ${globalP2Score}. Wordle = ${this.state.wordle}.`
    })
      }
        //Applies to end of turns 2, 4, 6 and player 2.
        else if (this.state.currentTurn % 2 === 0 && this.state.currentTurn < 7) {
          this.setState({
         player1: {
           name: this.state.player1.name,
          totalScore: this.state.player1.totalScore,
          currentPlayer: this.state.player1.currentPlayer
         }
       })
          this.setState({
      winLoseMessage: `Time's up! Sorry, better luck next round ${this.state.player1.name}. Your current score is ${globalP1Score}. The wordle was ${this.state.wordle}.`
    })
        }
      }  
  }
  //End of runTimer function.  
    
    error.innerHTML.length > 0 ? error.innerHTML = "" : null;
    
    if (wordInput.value.length !== 5) {
      error.style.color = "red";
      error.innerHTML = "Word is too short. Enter a word exactly 5 characters long."
    }
    else if (lettersOnly.test(wordInput.value) === false) {
      error.style.color = "red";;
      error.innerHTML = "Only letters are allowed. Please try again.";
    }
    else if (!dictionary.includes(wordInput.value.toLowerCase())) {
      error.style.color = "red";
      error.innerHTML = "You have entered an invalid word. Please only enter words that are valid and can be found in a dictionary.";
    }
    else {
    this.setState({
      wordle: wordInput.value.toUpperCase()
    })
      if (this.state.currentTurn % 2 === 1) {
        this.setState({
          player1: {
        name: this.state.player1.name,
        currentScore: this.state.player1.currentScore,
        totalScore: this.state.player1.totalScore,
        currentPlayer: ""
      },
      player2: {
        name: this.state.player2.name,
        currentScore: this.state.player2.currentScore,
        totalScore: this.state.player2.totalScore,
        currentPlayer: "*"
      }
        })
        
      }
      else {
        this.setState({
          player1: {
        name: this.state.player1.name,
        currentScore: this.state.player1.currentScore,
        totalScore: this.state.player1.totalScore,
        currentPlayer: "*"
      },
      player2: {
        name: this.state.player2.name,
        currentScore: this.state.player2.currentScore,
        totalScore: this.state.player2.totalScore,
        currentPlayer: ""
      }
        })
      }
      
      error.style.color = "blue";
      error.innerHTML = "Success. Wordle has been set."
      wordInput.value = "";
      wordInput.style.display = "none";
      keyPad.style.zIndex = "0";
      runStatus = 1;
      winLoseDiv.style.transition = "all 2s ease";
      playBtn.style.display = "none";
    }
    
    if (interval === undefined && runStatus === 1) {
    interval = setInterval(function() {
      runTimer()
    }, 1000)
    }
    
  }
  
  handleChange = (event) => {
    let wordInput = document.getElementById("wordInput");
    if (this.state.wordle !== "" && event.target.id !== "wordInput") {
    switch (this.state.currentRow) {
      case 1:    
    letterArr.push(event.target.innerHTML);
    this.setState({
      row1Letters: letterArr
    });
        letterArr.length > 5 ? letterArr.pop() : null;
     break;
      case 2:
        letterArr.push(event.target.innerHTML);
    this.setState({
      row2Letters: letterArr
    });
        letterArr.length > 5 ? letterArr.pop() : null;
        break;
      case 3:
        letterArr.push(event.target.innerHTML);
    this.setState({
      row3Letters: letterArr
    });
        letterArr.length > 5 ? letterArr.pop() : null;
        break;
      case 4:
        letterArr.push(event.target.innerHTML);
    this.setState({
      row4Letters: letterArr
    });
        letterArr.length > 5 ? letterArr.pop() : null;
        break;    
    }
    }
  event.target.id === "wordInput" && wordInput.value.length > 5 ? wordInput.value = wordInput.value.substring(0,5) : null;
  }
  
  deleteLetter() {
  letterArr.pop();
    switch (this.state.currentRow) {
      case 1:    
    this.setState({
      row1Letters: letterArr
    });
     break;
      case 2:
    this.setState({
      row2Letters: letterArr
    });
        break;
      case 3:
    this.setState({
      row3Letters: letterArr
    });
        break;
      case 4:
    this.setState({
      row4Letters: letterArr
    });
        break;     
    }
  }
  
  submitWord = () => {
    const invalidWord = document.getElementById("invalidWord");
    const winLoseDiv = document.getElementById("winLoseDiv");
    const winLoseMessage = document.getElementById("winLoseMessage");
    
    //This function gets called every time the Enter key is pressed, assuming 5 letters have been entered. It either marks the letters as green, yellow, or gray. 
    if (this.state.wordle !== "") {
    function setLetterBackground(currentLetterArr, wordle, currentRow) {
      for (let i = 0; i < currentLetterArr.length; i++) {
       
       if (currentLetterArr[i] === wordle[i]) {  document.getElementById(`r${currentRow}l${i+1}`).style.backgroundColor = "green";
        }
        else if (wordle.split("").includes(currentLetterArr[i])) {
         document.getElementById(`r${currentRow}l${i+1}`).style.backgroundColor = "yellow"; 
        }
        else {
         document.getElementById(`r${currentRow}l${i+1}`).style.backgroundColor = "gray";  
        }
      }
    }
    //Makes sure the word entered is a valid word in the dictionary.
      
    if (letterArr.length === 5 && !dictionary.includes(letterArr.join("").toLowerCase())) {
    invalidWord.innerHTML = "Not a valid word.";
    invalidWord.style.visibility = "visible";
    setTimeout(() => {
  invalidWord.style.visibility = "hidden";
      invalidWord.innerHTML = "";
}, 3000);
    }
      
      else if (letterArr.length < 5) {
    invalidWord.innerHTML = "Word not long enough.";
    invalidWord.style.visibility = "visible";
    setTimeout(() => {
  invalidWord.style.visibility = "hidden";
      invalidWord.innerHTML = "";
}, 3000);
  }
      
  else if (letterArr.length === 5 && this.state.currentRow === 1) {
    row1Arr.push(...letterArr);
   setLetterBackground(row1Arr, this.state.wordle, this.state.currentRow);
    this.setState({
      currentRow: 2,
      row1Letters: row1Arr
    });
   letterArr.splice(0)
  }
    else if (letterArr.length === 5 && this.state.currentRow === 2) {
    row2Arr.push(...letterArr);
      setLetterBackground(row2Arr, this.state.wordle, this.state.currentRow);
      this.setState({
        currentRow: 3, 
        row2Letters: row2Arr
      })
   currentScore = currentScore - 1;
   letterArr.splice(0) 
  }
  else if (letterArr.length === 5 && this.state.currentRow === 3) {
    row3Arr.push(...letterArr);
    setLetterBackground(row3Arr, this.state.wordle, this.state.currentRow);
    this.setState({
      currentRow: 4,
      row3Letters: row3Arr,
    });
   currentScore = currentScore - 1;
   letterArr.splice(0) 
  }
    else if (letterArr.length === 5 && this.state.currentRow === 4) {
    row4Arr.push(...letterArr);
      setLetterBackground(row4Arr, this.state.wordle, this.state.currentRow);
    this.setState({
      currentRow: 5,
      row4Letters: row4Arr,
    });
   currentScore = currentScore - 1;
   letterArr.splice(0) 
  }
  
  
      
  //If wordle is entered correctly by last try.
  if (row1Arr.join("") === this.state.wordle || row2Arr.join("") === this.state.wordle || row3Arr.join("") === this.state.wordle || row4Arr.join("") === this.state.wordle) {
    //Applies to end of turns 1, 3, and 5 and sets score for player 2.
    if (this.state.currentTurn % 2 === 1 && this.state.currentTurn < 7) {
      globalP2Score += currentScore;
      this.setState({
        player2: {
          name: this.state.player2.name,
          totalScore: this.state.player2.totalScore + currentScore,
          currentPlayer: this.state.player2.currentPlayer
        }
      })
    this.setState({
      winLoseMessage: `Congratulations ${this.state.player2.name}, you guessed correct! Your current score is ${globalP2Score}`
    })
    }
    else {
      globalP1Score += currentScore;
      this.setState({
        player1: {
          name: this.state.player1.name,
          totalScore: this.state.player1.totalScore + currentScore,
          currentPlayer: this.state.player1.currentPlayer
        }
      })
    this.setState({
      winLoseMessage: `Congratulations ${this.state.player1.name}, guessed correct! Your current score is ${globalP1Score}`
    })
    }
    
    winLoseDiv.style.backgroundColor = "lightgreen";
    clearInterval(interval)
    interval = undefined;
    winLoseDiv.classList.add("show");
    currentScore = 0;
  }
      
      //If wordle is entered incorrectly on last try.
  else if (this.state.currentRow === 4 && row4Arr.join("") !== this.state.wordle && row4Arr.length === 5 && dictionary.includes(row4Arr.join("").toLowerCase())) {
    winLoseDiv.classList.add("show");
    currentScore = 10;
    //Applies to end of turns 1, 3, and 5 and sets score for player 2.
    if (this.state.currentTurn % 2 === 1 && this.state.currentTurn < 7) {
    this.setState({
      winLoseMessage: `Sorry ${this.state.player2.name}, better luck next time. The wordle was ${this.state.wordle}. Your current score is ${this.state.player2.totalScore}`,
    })
    }
    //Applies to end of turns 2, 4, and 6 and sets score for player 2.
    else if (this.state.currentTurn % 2 === 0 && this.state.currentTurn < 7) {
      this.setState({
      winLoseMessage: `Sorry ${this.state.player1.name}, better luck next time. The wordle was ${this.state.wordle}. Your current score is ${this.state.player1.totalScore}`,
    })
    }
    winLoseDiv.style.backgroundColor = "#e32d2d";
    clearInterval(interval);
    interval = undefined;
  }
    }
  }
  
 helps = (event) => {
   const allPlayedLettersArr = row1Arr.concat(row2Arr).concat(row3Arr).concat(row4Arr);
   const vowels = ["A", "E", "I", "O", "U"];
   const vowelsinword = this.state.wordle.split("").filter((letter) => {return vowels.includes(letter) && !allPlayedLettersArr.includes(letter)});
   const randomVowel = Math.floor(Math.random() * vowelsinword.length)
   const consonantsinword = this.state.wordle.split("").filter((letter) => {return !vowels.includes(letter) && !allPlayedLettersArr.includes(letter)});
   const randomConsonant = Math.floor(Math.random() * consonantsinword.length);
   
   const vowelHelpContainer = document.getElementById("vowelHelpContainer");
   const consonantHelpContainer = document.getElementById("consonantHelpContainer");
   const timeHelpContainer = document.getElementById("timeHelpContainer");
   
   if (this.state.wordle !== "") {
 switch (event.target.id) {
   case "vowelHelpContainer":
     vowelsinword[randomVowel] === undefined ? vowelHelpContainer.innerHTML = "No unplayed vowels" : vowelHelpContainer.innerHTML = vowelsinword[randomVowel];
      $("#vowelHelpContainer").prop("disabled",true);
     currentScore -= 0.5;
     break;   
     case "consonantHelpContainer":
     consonantsinword[randomConsonant] === undefined ? consonantHelpContainer.innerHTML = "No unplayed consonants" : consonantHelpContainer.innerHTML = consonantsinword[randomConsonant];
     $("#consonantHelpContainer").prop("disabled",true);
     currentScore -= 0.5;
     break; 
     case "timeHelpContainer":
     this.state.timerSeconds < 10 ? this.setState({timerSeconds: parseInt(this.state.timerSeconds[1]) + 30}) : null;
    this.state.timerSeconds < 30 && this.state.timerSeconds > 9 ? this.setState({timerSeconds: this.state.timerSeconds + 30}) : null;
     //Changed 
     this.state.timerSeconds >= 31 ? this.setState({timerMinutes: parseInt(this.state.timerMinutes[1]) + 1, timerSeconds: this.state.timerSeconds + 30 - 60}) : null;
     this.state.timerSeconds === 30 ? this.setState({timerMinutes: "0" + parseInt(this.state.timerMinutes[1]) + 1, timerSeconds: this.state.timerSeconds + 30 - 60}) : null;
     $("#timeHelpContainer").prop("disabled",true);
     currentScore -= 0.5;
     break; 
 }
   }
 }
  
render() 
 
  {
    
  return (
 
  <div id="mainContainer">
      {/*Gets displayed on start and at the end of the game when the "New Game" button is pressed.*/}
      <div id="newGameDiv">
        <div id="howToPlay">
          <h3 id="howToPlayTitle">How To Play</h3>
          <button id="hideInstructionsBtn" onClick={this.showHideInstructions}>X</button>
          <p>Wordle 2.0 is a two player game where each person takes turns setting the wordle for the other player, who then attempts to guess the wordle. After the first player enters the wordle and presses the "Play" button, the second player has 2 minutes and up to four tries to guess the wordle. They may use any or all three of the "helps" below when it is their turn.</p>
        <ul>
          <li>Consonant (shows one unplayed consonant in the wordle)</li>
          <li>Vowel (shows one unplayed vowel in the wordle)</li>
          <li>30 Seconds (adds 30 seconds to the countdown)</li>
        </ul>
        <p>Each player has 3 turns to set the wordle for their opponent and 3 turns to guess the wordles that their opponent sets for them. There are 3 rounds total. At the beginning of each round each player starts with 10 points. Deductions are made as shown below.</p>
          <p><b>1</b> Point for each wrong guess at the wordle.</p>
          <p><b>0.5</b> points for "Help" used.</p>
          <p>If time runs out or you guess wrong on all four guesses, your score for that round gets set to <b>0</b>. At the end of round 3, your scores from all 3 rounds will be added up and whoever has the most points wins!</p>
        </div>
        <h1 id="newGameTitle">Wordle 2.0</h1>
        <p id="newGameInstructions" onClick={this.showHideInstructions}>Instructions</p>
        <p id="enterName">Enter your names below and click "Play" to start a new game.</p>
        <p id="startError">{this.state.error}</p>
        <h3>Player 1</h3>
        <input type="text" id="player1Name" class="nameInput" autocomplete="off"></input>
        <h3>Player 2</h3>
        <input type="text" id="player2Name" class="nameInput" autocomplete="off"></input>
        <button id="newGameBtn" onClick={this.newGame}>Play</button>
        
      </div>
      {/*Gets displayed at the end of each turn.*/}
      <div id="winLoseDiv">
        <h1 id="winLoseMessage">{this.state.winLoseMessage}</h1>
        <button id="continue" onClick={this.continue}>Continue</button>
 </div>
      {/*Gets displayed at the end of the game when all rounds are finished.*/}
      <div id="endGame">
        <h1 id="winLoseMessage">{this.state.winLoseMessage}</h1>
        <h1>Final Score</h1>
        <h1>{`${this.state.player1.name}: ${this.state.player1.totalScore}`}</h1>
        <h1>{`${this.state.player2.name}: ${this.state.player2.totalScore}`}</h1>
        <button id="playAgainBtn" onClick={this.playAgain}>Play Again</button>
      </div>
      
      <div id="wordleBox">
        
        <h2 id="title">Wordle 2.0</h2>
        <p id="instructions">Enter a 5 characeter word and click "Play".</p>
        <p id="error">{this.state.topMessage}</p>
        <p id="player1Score" class="roundInfo"><span id="player1Current">{this.state.player1.currentPlayer}</span>{`${this.state.player1.name}: `}<span class="playerScore">{this.state.player1.totalScore}</span></p>
        <p id="player2Score" class="roundInfo"><span id="player2Current">{this.state.player2.currentPlayer}</span>{`${this.state.player2.name}: `}<span class="playerScore">{this.state.player2.totalScore}</span></p>
        <p id="currentRound" class="roundInfo">Round: <span class="currentRound">{this.state.currentRound}</span></p>
        <input id="wordInput" type="text" placeholder="Enter a 5 character word" autocomplete="off" onChange={this.handleChange}></input>
        <button id="playBtn" onClick={this.setWordle}>Play</button>
        
   <h1 id="timer">{`${this.state.timerMinutes}:${this.state.timerSeconds}`}</h1>
        <h3 id="hints">Helps</h3>
        <div id="helpsContainer">
          <button id="vowelHelpContainer" class="helpsContainers" onClick={this.helps}>Vowel</button>
          <button id="consonantHelpContainer" class="helpsContainers" onClick={this.helps}>Consonant</button>
          <button id="timeHelpContainer" class="helpsContainers" onClick={this.helps}>30 Seconds</button>
          </div>
        <div id="lettersContainer">
          <div id="invalidWord"></div>
          <div id="r1l1" class="letters">{this.state.row1Letters[0]}</div>
          <div id="r1l2" class="letters">{this.state.row1Letters[1]}</div>
          <div id="r1l3" class="letters">{this.state.row1Letters[2]}</div>
          <div id="r1l4" class="letters">{this.state.row1Letters[3]}</div>
          <div id="r1l5" class="letters">{this.state.row1Letters[4]}</div>
          <div id="r2l1" class="letters">{this.state.row2Letters[0]}</div>
          <div id="r2l2" class="letters">{this.state.row2Letters[1]}</div>
          <div id="r2l3" class="letters">{this.state.row2Letters[2]}</div>
          <div id="r2l4" class="letters">{this.state.row2Letters[3]}</div>
          <div id="r2l5" class="letters">{this.state.row2Letters[4]}</div>
          <div id="r3l1" class="letters">{this.state.row3Letters[0]}</div>
          <div id="r3l2" class="letters">{this.state.row3Letters[1]}</div>
          <div id="r3l3" class="letters">{this.state.row3Letters[2]}</div>
          <div id="r3l4" class="letters">{this.state.row3Letters[3]}</div>
          <div id="r3l5" class="letters">{this.state.row3Letters[4]}</div>
          <div id="r4l1" class="letters">{this.state.row4Letters[0]}</div>
          <div id="r4l2" class="letters">{this.state.row4Letters[1]}</div>
          <div id="r4l3" class="letters">{this.state.row4Letters[2]}</div>
          <div id="r4l4" class="letters">{this.state.row4Letters[3]}</div>
          <div id="r4l5" class="letters">{this.state.row4Letters[4]}</div>
        </div>
        
        <div id="keyPad">
         
          <div id="q" class="keys" onClick={this.handleChange}>Q</div>
          <div id="w" class="keys" onClick={this.handleChange}>W</div>
          <div id="e" class="keys" onClick={this.handleChange}>E</div>
          <div id="r" class="keys" onClick={this.handleChange}>R</div>
          <div id="t" class="keys" onClick={this.handleChange}>T</div>
          <div id="y" class="keys" onClick={this.handleChange}>Y</div>
          <div id="u" class="keys" onClick={this.handleChange}>U</div>
          <div id="i" class="keys" onClick={this.handleChange}>I</div>
          <div id="o" class="keys" onClick={this.handleChange}>O</div>
          <div id="p" class="keys" onClick={this.handleChange}>P</div>
          
          <div id="a" class="keys" onClick={this.handleChange}>A</div>
          <div id="s" class="keys" onClick={this.handleChange}>S</div>
          <div id="d" class="keys" onClick={this.handleChange}>D</div>
          <div id="f" class="keys" onClick={this.handleChange}>F</div>
          <div id="g" class="keys" onClick={this.handleChange}>G</div>
          <div id="h" class="keys" onClick={this.handleChange}>H</div>
          <div id="j" class="keys" onClick={this.handleChange}>J</div>
          <div id="k" class="keys" onClick={this.handleChange}>K</div>
          <div id="l" class="keys" onClick={this.handleChange}>L</div>
          
          <div id="enter" class="keys" onClick={this.submitWord}>Enter</div>
          <div id="z" class="keys" onClick={this.handleChange}>Z</div>
          <div id="x" class="keys" onClick={this.handleChange}>X</div>
          <div id="c" class="keys" onClick={this.handleChange}>C</div>
          <div id="v" class="keys" onClick={this.handleChange}>V</div>
          <div id="b" class="keys" onClick={this.handleChange}>B</div>
          <div id="n" class="keys" onClick={this.handleChange}>N</div>
          <div id="m" class="keys" onClick={this.handleChange}>M</div>
          <div id="delete" class="keys" onClick={this.deleteLetter}>[<span id="redX">x</span>]</div>
        </div>
      </div>
  </div>
      
  
  );

  }

};

ReactDOM.render(<MyWordle/>, document.getElementById('root'));
