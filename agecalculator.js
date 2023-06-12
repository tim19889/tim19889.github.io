function calculateAge() {
  
  let errorCount = 0;
  
  let errorStyling = () => {
    let elemDayInput = document.getElementById("dayInput");
    let elemMonthInput = document.getElementById("monthInput");
    let elemYearInput = document.getElementById("yearInput");
    let inputLabels = document.querySelectorAll('.inputLabels');
    
    if (errorCount > 0) {
      elemDayInput.style.borderColor = "red";
      elemMonthInput.style.borderColor = "red";
      elemYearInput.style.borderColor = "red";
      for (let i = 0; i < inputLabels.length; i++) {
        inputLabels[i].style.color = "red";
      }
    }
    else {
      elemDayInput.style.borderColor = "lightgray";
      elemMonthInput.style.borderColor = "lightgray";
      elemYearInput.style.borderColor = "lightgray";
      for (let i = 0; i < inputLabels.length; i++) {
        inputLabels[i].style.color = "gray";
      }
    }
  }
  
  const monthsWith30Days = [4,6,9,11];
  const monthsWith31Days = [1,3,5,7,8,10,12];
  
  let dayInput = parseInt(document.getElementById("dayInput").value);
  let monthInput = parseInt(document.getElementById("monthInput").value);
  let yearInput = parseInt(document.getElementById("yearInput").value);

  let todaysDate = JSON.stringify(new Date());
  let currentYear = parseInt(todaysDate.substring(1,5));
  let currentMonth = parseInt(todaysDate.substring(7,8));
  let currentDay = parseInt(todaysDate.substring(9,11));

  let dayError = document.getElementById("dayError");
  let monthError = document.getElementById("monthError");
  let yearError = document.getElementById("yearError");
  let emptyFieldError = document.getElementById("emptyFieldError");

  if (JSON.stringify(yearInput) !== "null" && JSON.stringify(monthInput) !== "null" && JSON.stringify(dayInput) !== "null") {

//Error handling
    if (yearInput >= currentYear) {
      errorCount++;
      yearError.style.visibility = "visible";
      errorStyling();
    }
    if (monthInput > 12 || monthInput < 1) {
      errorCount++;
      monthError.style.visibility = "visible";
      errorStyling();
    }
    if (dayInput > 31 || dayInput < 1) {
      errorCount++;
      dayError.style.visibility = "visible";
      errorStyling();
    }
    if (monthsWith30Days.includes(monthInput) && dayInput === 31) {
        errorCount++;
        dayError.style.visibility = "visible";
        errorStyling();
    }

    //Only runs if there are no errors.
    if (errorCount === 0) {
      errorStyling();
      const monthsAndDays = [1,31,2,28.25,3,31,4,30,5,31,6,30,7,31,8,31,9,30,10,31,11,30,12,31];
      let yearsOldDisplay = document.getElementById("yearsOld");
      let monthsOldDisplay = document.getElementById("monthsOld");
      let daysOldDisplay = document.getElementById("daysOld");
      let daysOld = monthsAndDays[monthsAndDays.indexOf(monthInput)+1] - dayInput;
      
      //calculate days in first year of birth.
      for (let i = monthsAndDays.indexOf(monthInput+1); i < monthsAndDays.length; i++) {
        if (monthsAndDays[i] > 27) {
          daysOld+=monthsAndDays[i];
        }
      }
    //calculate days starting from first year after birth (so if born in 1978, it starts at 1979) up until the end of the year before the current year (so if the year is 2023, is calculated to the end of 2022).
      for (let i = yearInput+1; i < currentYear; i++) {
        daysOld += 365;
        
      }
      //Calculates days from January of the current year up until the current date and adds them to the daysOld variable.
      for (let i = 0; i < monthsAndDays.length; i++) {
        if (monthsAndDays[i] < currentMonth) {
          daysOld+=monthsAndDays[i+1];
        }
        if (monthsAndDays[i] === currentMonth) {
          daysOld+=currentDay;
          
          
        }
      }
      
      //daysOldUnder365 below give the days left after dividing the daysOld variable by 365.
      //MonthsOld variable gives you the amount of months in the daysOldUnder365 variable. 30.416666 represents one month (365 / 12).
      
      //Gives you the same total days old age as Age Calculator on calculator.net
      let daysOldWithIncrease = Math.round(daysOld * (1 + (0.063 / 100)));
      
      let daysOldUnder365 = Math.round(daysOld % 365);
      let monthsOld = daysOldUnder365 / 30.416666;
      let yearsOld = Math.floor(Math.round(daysOld) / 365);
      
      if (monthInput === 12) {
        yearsOld -= 1;
      }
      
      yearsOldDisplay.innerHTML = yearsOld;
      monthsOldDisplay.innerHTML = Math.floor(monthsOld);
      daysOldDisplay.innerHTML = Math.round(daysOldUnder365 % 30.416666);
      yearError.style.visibility = "hidden";
      monthError.style.visibility = "hidden";
      dayError.style.visibility = "hidden";
    }
    
    //Removes empty field error when all fields are filled in. 
    emptyFieldError.style.visibility = "hidden";
  }
  
  else { 
    errorCount++;
    errorStyling();
    emptyFieldError.style.visibility = "visible";
  }
}
