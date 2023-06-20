let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let resultsText = document.querySelectorAll(".resultsText");
let welcomeText = document.querySelectorAll(".welcomeText");
let bmiNumber = document.getElementById("bmiNumber");
let weightRangeSpan = document.getElementById("weightRangeSpan");
let metricRadio = document.getElementById("metric");
let imperialRadio = document.getElementById("imperial");
let heightUnits = document.getElementById("heightUnits");
let weightUnits = document.getElementById("weightUnits");
let idealweightunits1 = document.getElementById("idealweightunits1");
let idealweightunits2 = document.getElementById("idealweightunits2");
  
  const showBMI = (event) => {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    
    
    function calculateHealthyWeight(currentHeight) {
      let lowEndSpan = document.getElementById("lowend");
      let highEndSpan = document.getElementById("highend");
      let lowEndWeight = 1;
      let highEndWeight = 2000;
      let tempbmilow;
      let tempbmihigh;
      
      if (metricRadio.checked) {
tempbmilow = (lowEndWeight / (currentHeight * currentHeight) * 10000).toFixed(1);
tempbmihigh = (highEndWeight / (currentHeight * currentHeight) * 10000).toFixed(1);
        
        while (parseFloat(tempbmilow) < 18.5) {
        lowEndWeight+= 0.5;
        tempbmilow = (lowEndWeight / (currentHeight * currentHeight) * 10000).toFixed(1);
        if (tempbmilow === "18.5" || tempbmilow > "18.5") {
          lowEndSpan.innerHTML = lowEndWeight;
        }
      }
      
      while (parseFloat(tempbmihigh) > 24.9) {
        highEndWeight-=0.5;
        tempbmihigh = (highEndWeight / (currentHeight * currentHeight) * 10000).toFixed(1);
        if (tempbmihigh === "24.9" || tempbmihigh < "24.9") {
          highEndSpan.innerHTML = highEndWeight;
        }
      }
        
      }
      
      else if (imperialRadio.checked) {
tempbmilow = (lowEndWeight / (currentHeight ** 2) * 703).toFixed(1);
tempbmihigh = (highEndWeight / (currentHeight ** 2) * 703).toFixed(1);
        
        while (parseFloat(tempbmilow) < 18.5) {
        lowEndWeight+= 0.5;
        tempbmilow = (lowEndWeight / (currentHeight ** 2) * 703).toFixed(1);
        if (tempbmilow === "18.5" || tempbmilow > "18.5") {
          lowEndSpan.innerHTML = lowEndWeight;
        }
      }
      
      while (parseFloat(tempbmihigh) > 24.9) {
        highEndWeight-=0.5;
        tempbmihigh = (highEndWeight / (currentHeight ** 2) * 703).toFixed(1);
        if (tempbmihigh === "24.9" || tempbmihigh < "24.9") {
          highEndSpan.innerHTML = highEndWeight;
        }
      }
      }
      }
    
    
    
    //Checks if a + or - has been typed, and if it does, resets the input to blank.
    if (event.target.value === "") {
      event.target.value = "";
      bmiNumber.innerHTML = "";
    }
    else {
      if (height > 0 && weight > 0) {
        
        calculateHealthyWeight(height);
        
        let bmi; 
        if (metricRadio.checked) {
          bmi = (weight / (height * height) * 10000).toFixed(1);
        }
        else if (imperialRadio.checked) {
          bmi = (weight / (height ** 2) * 703).toFixed(1);
        }
        
        welcomeText.forEach((item) => {item.style.display="none"})
        
        resultsText.forEach((item) => {
          item.style.display="block"})
        
        bmiNumber.innerHTML = bmi;
        
        if (bmi < 18.5) {
          weightRangeSpan.innerHTML = "underweight";
        }
        else if (bmi > 18.4 && bmi < 25) {
          weightRangeSpan.innerHTML = "a healthy weight";
        }
        else if (bmi > 24.9 && bmi < 30) {
          weightRangeSpan.innerHTML = "overweight";
        }
        else if (bmi > 29.9 && bmi < 40) {
          weightRangeSpan.innerHTML = "obese";
        }
        else {
          weightRangeSpan.innerHTML = "severely obese"
        }
      }
    
      
    } 
  }

  const setUnits = () => {
    weightInput.value = "";
    heightInput.value = "";
     welcomeText.forEach((item) => {item.style.display="block"})
     resultsText.forEach((item) => {item.style.display="none"})
    
    if (metricRadio.checked) {
      heightUnits.innerHTML = "cm";
      weightUnits.innerHTML = "kg";
      idealweightunits1.innerHTML = "kgs";
      idealweightunits2.innerHTML = "kgs";
    }
    else if (imperialRadio.checked) {
      heightUnits.innerHTML = "in";
      weightUnits.innerHTML = "lb";
      idealweightunits1.innerHTML = "lbs";
      idealweightunits2.innerHTML = "lbs";
    }
  }
  
  heightInput.addEventListener('input', showBMI);
weightInput.addEventListener('input', showBMI);


  
