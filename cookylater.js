import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";

const operatorArr = ["+", "-", "*", "/"];
const numArr = [];
const strArr = [];

class Calculator extends React.Component {
  
  constructor(props) {
    
    super(props);
    
    this.state = {
      displaytop: 0,
      displaybottom: 0
    }
    
    this.numInput = this.numInput.bind(this);
    this.equals = this.equals.bind(this);
    
  }
  
  
  
  equals() {
     
      this.setState({

      displaytop: (strArr.join("")),
      displaybottom: Function("return " + strArr.join(""))()
    });
    const currentValue = Function("return " + strArr.join(""))();
      numArr.splice(0);
      strArr.splice(0);
      numArr.push(currentValue);
      strArr.push(JSON.stringify(currentValue));
    }
  
  numInput(str, num) {
    
    if (numArr[0] === 0) {
        numArr.splice(0);
        strArr.splice(0);
      }
    
    numArr.push(num);
     strArr.push(str);
    
    //Makes it so two decimals can not be entered next to each other.
    if (strArr[strArr.length-2] === "." && str === ".") {
     strArr.splice(strArr.length-1);
      numArr.splice(numArr.length-1);
    }                                             
    
    let operatorCount = 0;
    let periodCount = 0;
 
    /*When a period is entered, it checks how many periods are currently in the strArr array. If it's more than the amount of operators in the array +1, it removes the last period from the array. This makes sure that numbers like 534.4332.434.602 aren't entered. */
    
if (strArr[strArr.length-1] === ".") {
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ".") {
      periodCount++;
    }
    if (operatorArr.includes(strArr[i]) === true) {
      operatorCount++
    }
  }
}
if (periodCount > operatorCount+1) {
  strArr.splice(strArr.length-1);
  numArr.splice(numArr.length-1);
  periodCount--;
}
    
    
    
    if (str === "clear") {
      strArr.splice(0);
      strArr.push("0");
      numArr.splice(0);
      numArr.push(0);
      
    }
    
    /*If statements are to make sure only the last operator entered in strArr is used when running the calculations. */
    
    if (operatorArr.includes(strArr[strArr.length-1]) && operatorArr.includes(strArr[strArr.length-2]) && strArr[strArr.length-1] !== "-") {
      strArr.splice(strArr.length-2, 1);
    };
    
    if (operatorArr.includes(strArr[strArr.length-1]) && operatorArr.includes(strArr[strArr.length-2]) && strArr[strArr.length-1] !== "-") {
      strArr.splice(strArr.length-2, 1);
    }
    if (strArr[strArr.length-1] === "-" && strArr[strArr.length-2] === "-") {
      strArr.splice(strArr.length-2, 1);
    }
    
    if (operatorArr.includes(strArr[strArr.length-1]) === false && strArr[strArr.length-1] !== ".") {
    this.setState({

      displaytop: numArr,
      displaybottom: numArr
    });
    }
    
    
  }

render() 
  
  {
    
  return (
  <div>
      
      <div id="calculator">
        <div id="clear" onClick={() => this.numInput("clear")}><p class="btntxt">AC</p></div>
        <div id="display-container"><p id="display-top">{this.state.displaytop}</p><br/><p id="display">{this.state.displaybottom}</p>
          <p></p>
        </div>
        <br/>
        <div class="funcbtn" id="add" onClick={() => this.numInput("+")}><p class="funcbtntxt">+</p></div>
        <div class="funcbtn" id="subtract" onClick={() => this.numInput("-")}><p class="funcbtntxt">-</p></div>
        <div class="funcbtn" id="divide" onClick={() => this.numInput("/")}><p class="funcbtntxt">/</p></div>
        <div class="funcbtn" id="multiply" onClick={() => this.numInput("*")}><p class="funcbtntxt">x</p></div>
        <br/>
          <div class="smallbtn" id="one" onClick={() => this.numInput(1,1)}><p class="numbtntxt">1</p></div>
        <div class="smallbtn" id="two" onClick={() => this.numInput(2,2)}><p class="numbtntxt">2</p></div>
        <div class="smallbtn" id="three" onClick={() => this.numInput(3,3)}><p class="numbtntxt">3</p></div>
        <div class="smallbtn" id="four" onClick={() => this.numInput(4,4)}><p class="numbtntxt">4</p></div>
        <div class="smallbtn" id="five" onClick={() => this.numInput(5,5)}><p class="numbtntxt">5</p></div>
        <div class="smallbtn" id="six" onClick={() => this.numInput(6,6)}><p class="numbtntxt">6</p></div>
        <div class="smallbtn" id="seven" onClick={() => this.numInput(7,7)}><p class="numbtntxt">7</p></div>
        <div class="smallbtn" id="eight" onClick={() => this.numInput(8,8)}><p class="numbtntxt">8</p></div>
        <div class="smallbtn" id="nine" onClick={() => this.numInput(9,9)}><p class="numbtntxt">9</p></div>
        <div class="smallbtn" id="zero" onClick={() => this.numInput(0,0)}><p class="numbtntxt">0</p></div>
        <div class="smallbtn" id="decimal" onClick={() => this.numInput(".", ".")}><p class="numbtntxt">.</p></div>
        <div id="equals" onClick={this.equals}><p id="equalstxt">=</p></div>
        
        
      </div>
      
  </div>
  
  );

  }

};

ReactDOM.render(<Calculator/>, document.getElementById('root'))