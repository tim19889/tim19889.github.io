import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";


const cid = [["PENNY:", 5], ["NICKEL:", 6], ["DIME:", 10], ["QUARTER:", 15], ["ONE:", 30], ["FIVE:", 50], ["TEN:", 80], ["TWENTY:", 120], ["HUNDRED:", 500]];


class CashRegister extends React.Component {
  
  constructor(props) {
    
    super(props);
    //If items are added or removed from state, must update line 104.
    this.state = {
      item: "",
      cash: 0,
      date: "",
      changeDue: 0,
      changeDueArray: "",
      transID: 0,
      status: "OPEN",
      price: 0,
      cash: 0
      
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.checkout = this.checkout.bind(this);
    this.reset = this.reset.bind(this);
    
  }
  
  handleChange(event) {
  switch (event.target.id) {
      case "cashGiven":
      this.setState({
         cash: parseInt(event.target.value)
      })
      break;
      case "itemInput":
      this.setState({
        item: event.target.value
      })
      break;
      case "priceInput":
      this.setState({
         price: parseInt(event.target.value)
      })
      break;
  }
    //Prevents negative values from being entered for price and cash.
  event.target.value < 0 ? this.setState({cash: 0}) : null;
  event.target.value < 0 ? this.setState({price: 0}) : null;
  }
  
  
  
  checkout(price, mycid) {
    let error = document.getElementById("error");
    error.innerHTML.length > 0 ? error.innerHTML = "" : null;
    
    if (Object.values(this.state).slice(7, 17).every((item) => { return item >= 0})) {
    event.preventDefault();
    
      //Displays error message if inputs not filled out correctly.
    if (this.state.cash === 0) {error.innerHTML = `Please enter a value for "Cash Given".`; return "Error has occured."};
    if (this.state.price === 0) {error.innerHTML = `Please enter a value for "Price".`; return "Error has occured."};
    if (this.state.item === "") {error.innerHTML = `Please enter a value for "Item".`; return "Error has occured."};
      
      
      
      
      document.getElementById("status_text").style.color="green";
   let currentPrice = this.state.price;
   let cashGivenTotal = this.state.cash;
    
    
    
  this.setState({
    transID: this.state.transID + 1,
    date: new Date().toLocaleDateString("en-EN"),
    cash: cashGivenTotal,
    changeDue: cashGivenTotal - currentPrice
  })
   
    
    
  let totalCid = parseInt((mycid.flat().filter((item) => {return isNaN(item) === false}).reduce((a,b) => {return a+b}))) * 100;
  let changeDue = (cashGivenTotal-currentPrice);
  const denominations = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  const returnArr = [];
console.log(cashGivenTotal, currentPrice)
console.log(totalCid, changeDue)
if (totalCid == changeDue) {
  this.setState({
    status: "CLOSED", 
    changeDueArray: mycid})
  document.getElementById("status_text").style.color="red";
}
else if (totalCid < changeDue) {
  
  this.setState({
    status: "INSUFFICIENT_FUNDS", 
    changeDueArray: JSON.stringify([1])})
  document.getElementById("status_text").style.color="red";
}

    
  else {
changeDue = changeDue / 100;   
for (let i = mycid.length-1; i >= 0; i--) {
  if (changeDue >= denominations[i]) {
    let count = 0;
    while (Number(changeDue).toFixed(2) >= denominations[i] && mycid[i][1] > 0) {
    changeDue -= denominations[i];
    mycid[i][1] -= denominations[i];
    count+= denominations[i];
    }
    returnArr.push([mycid[i][0], count])
  }
}
    
if (changeDue > 0.01) {
  
  this.setState({
    status: "INSUFFICIENT_FUNDS", 
    changeDueArray: JSON.stringify([2])})
  document.getElementById("status_text").style.color="red";
}
else {
  this.setState({
    status: "OPEN", 
    changeDueArray: JSON.stringify(mycid.flat())})
}
  } 
    }
    }
  
  reset() {
    event.preventDefault();
    document.getElementById("status_text").style.color="green";
    this.setState({
      item: "",
      price: 0,
      cash: 0,
      date: "",
      changeDue: 0,
      status: "OPEN",
      changeDueArray: "",
        cash: 0
    })
    cid[0][1] = 5;
    cid[1][1] = 6;
    cid[2][1] = 10;
    cid[3][1] = 15;
    cid[4][1] = 30;
    cid[5][1] = 50;
    cid[6][1] = 80;
    cid[7][1] = 120;
    cid[8][1] = 500;
  }
  
  
  
  

render() 
  
  {
    
  return (
  <div id="mainContainer">
      <div id="registerContainer">
        <img src="https://www.dropbox.com/s/7drnj04fcf1ozql/Register-Top.jpg?raw=1" id="registerTop"></img>
        <img src="https://www.dropbox.com/s/qoo9b5xzpqsimwq/Register-Bottom.jpg?raw=1" id="registerBottom"></img>
        <div id="display">
          <div id="displayLeft">
            <h4 className="displayText">{`Item: ${this.state.item}`}</h4>
            <h4 className="displayText">{`Price: $${(this.state.price / 100).toFixed(2)}`}</h4>
            <h4 className="displayText">{`Cash: $${(this.state.cash / 100).toFixed(2)}`}</h4>
          </div>
          <div id="displayRight">
            <h4 className="displayText">{`TransID: ${this.state.transID}`}</h4>
            <h4 className="displayText">{`Date: ${this.state.date}`}</h4>
            <h4 className="displayText">{`Change: $${(this.state.changeDue / 100).toFixed(2)}`}</h4>
          </div>
        </div>
        <div id="registerStatus">
          <div id="registerStatusLeft">
            <h4 className="displayTextBottom" id="status_text">{this.state.status}</h4>
            <h4 className="displayTextBottom">{`${cid[0][0]} ${cid[0][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[1][0]} ${cid[1][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[2][0]} ${cid[2][1].toFixed(2)}`}</h4>
          </div>
          <div id="registerStatusMiddle">
            <h4 class="displayFillerText">Filler</h4>
            <h4 className="displayTextBottom">{`${cid[3][0]} ${cid[3][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[4][0]} ${cid[4][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[5][0]} ${cid[5][1].toFixed(2)}`}</h4>
          </div>
          <div id="registerStatusRight">
            <h4 class="displayFillerText">Filler</h4>
            <h4 className="displayTextBottom">{`${cid[6][0]} ${cid[6][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[7][0]} ${cid[7][1].toFixed(2)}`}</h4>
            <h4 className="displayTextBottom">{`${cid[8][0]} ${cid[8][1].toFixed(2)}`}</h4>
          </div>
        </div>
        
      </div>
      
      
      {/*Input Section */}
      
      <div id="inputs">
        <p id="error"></p>
        <form>
          <h4 class="inputLabelNames">Cash Given</h4>
        <input type="number" className="denominationInputs" id="cashGiven" onChange={this.handleChange} value={this.state.cash} required></input>
        <h4 id="itemInputLabel" className="inputLabelNames">Item</h4>
        <input id="itemInput" type="text" onChange={this.handleChange} value={this.state.item} required></input>
        <h4 id="priceInputLabel" className="inputLabelNames">Price</h4>
          <p id="priceDescriptionText">(Last two digits are cents)</p>
        <input id="priceInput" type="number" onChange={this.handleChange} value={this.state.price} required></input>
        <h4 id="cashInputLabel" className="inputLabelNames">Cash</h4>
        <p id="cashInput">{`$${(this.state.cash / 100).toFixed(2)}`}</p>
        <button id="resetButton" onClick={this.reset}><h4>RESET</h4></button>
        <button id="checkoutButton" type="submit" onClick={() => this.checkout(this.state.price, cid)}><h4>CHECKOUT</h4></button>
        </form>
      </div>
  </div>
  
  );

  }

};

ReactDOM.render(<CashRegister/>, document.getElementById('root'));
