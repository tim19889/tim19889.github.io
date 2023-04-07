

let sessionContainerColor = 0;
let interval;
let intervalMinutes;
let globalBreakMinutes = 5;
let globalSessionMinutes = 25;
let globalSeconds = 60;
let runStatus = 0;
let resetStatus = 0;
let runCount = 0;
let sessionBreak = 0; //0 is session, 1 is break.

  
  const timerAdjust = (clicked_id) => {
      switch (clicked_id) {
        case "break-decrement":
          if (runStatus !== 1) {
            globalBreakMinutes-=1;
          if (globalBreakMinutes < 1) {
              globalBreakMinutes+=1;
          }
            document.getElementById("break-length").innerHTML = globalBreakMinutes;
          }
         break; 
        case "break-increment":
          if (runStatus !== 1) {
           globalBreakMinutes += 1;
          if (globalBreakMinutes > 60) {
            globalBreakMinutes -= 1;
          }
            document.getElementById("break-length").innerHTML = globalBreakMinutes;
          }
          break;
          case "session-decrement":
          if (runStatus !== 1) {
           globalSessionMinutes-=1;
          if (globalSessionMinutes < 1) {
            globalSessionMinutes+=1;
          }
           document.getElementById("session-length").innerHTML = globalSessionMinutes; 
            document.getElementById("time-left").innerHTML = `${globalSessionMinutes}:00`; 
          }
          break;
          case "session-increment":
          if (runStatus !== 1) {
           globalSessionMinutes+=1;
          if (globalSessionMinutes > 60) {
            globalSessionMinutes-=1;
          }
            document.getElementById("session-length").innerHTML = globalSessionMinutes; 
            document.getElementById("time-left").innerHTML = `${globalSessionMinutes}:00`; 
          }
          break;
      } 
  }
  
  const start = () => {
    
    if (runCount === 0) {
    intervalMinutes = globalSessionMinutes-1;
    runCount++;
    }
    
  if (runStatus === 0) {
    runStatus = 1;
    //Makes sure two or more intervals can't be running simultaneously if the start_stop button is pressed more than once per second.
    interval = undefined;
  }
    else if (runStatus === 1) {
      runStatus = 0;
      clearInterval(interval);
    }
    
    if (interval === undefined) {
    interval = setInterval(function() {
      //When Reset button is clicked, it changes the runCount to 0 and runStatus to 0. It also changes the state and global variables. When this happens, it triggers this IF statement which sets the time back to 25:00.
      
      
      //This takes effect when the start/stop button is pressed a second time.
      if (runStatus === 0) {
        globalSeconds++;
        clearInterval(interval);
      }
      
      globalSeconds-=1;
      
      
      //When seconds reach 0, it decreases the minutes by 1 and sets the seconds back to 60.
      if (globalSeconds === -1) {
        intervalMinutes-=1;
        globalSeconds = 59;
      }
      
      
      //When the countdown reaches 00:00, change from session to break minutes.
      if (intervalMinutes === -1 && globalSeconds === 59 && sessionBreak === 0) {
        sessionBreak = 1;
        intervalMinutes = globalBreakMinutes;
        globalSeconds = 0;
        document.getElementById("timer-label").innerHTML = "Break";
        document.getElementById("beep").play();
      }
       else if (intervalMinutes === -1 && globalSeconds === 59 && sessionBreak === 1) {
        sessionBreak = 0;
        intervalMinutes = globalSessionMinutes;
         globalSeconds = 0;
        document.getElementById("timer-label").innerHTML = "Session";
        document.getElementById("beep").play();
      }
      
      //Changes time-left border when time gets below 2 minutes left. 
      if (intervalMinutes === 0 || intervalMinutes === 1) {
        if (sessionContainerColor === 0) {
          document.getElementById("session-container").style.borderColor = "red";
          sessionContainerColor = 1;
        }
        else if (sessionContainerColor === 1) {
          document.getElementById("session-container").style.borderColor = "black";
          sessionContainerColor = 0;
        }
      }
      
      else if (intervalMinutes !== 0 || intervalMinutes !== 1) {
        document.getElementById("session-container").style.borderColor = "#0b00e0";
      }
      
      
      //Lines of code below control when to add a "0" before the seconds and minutes.
      
      if (globalSeconds < 10 && intervalMinutes > 9) 
      {document.getElementById("time-left").innerHTML = `${intervalMinutes}:0${globalSeconds}`}
      
      else if (globalSeconds > 9 && intervalMinutes < 10) {document.getElementById("time-left").innerHTML = `0${intervalMinutes}:${globalSeconds}`}
      
      else if (globalSeconds < 10 && intervalMinutes < 10) {document.getElementById("time-left").innerHTML = `0${intervalMinutes}:0${globalSeconds}`}

else {document.getElementById("time-left").innerHTML = `${intervalMinutes}:${globalSeconds}`}
      
    }, 1000);
    }
  }
 
  
  const reset = () => {
    clearInterval(interval);
    interval = undefined;
    runCount = 0;
    runStatus = 0;
    resetStatus = 1;
    
    
  globalSessionMinutes = 25;
  globalBreakMinutes = 5;
    globalSeconds = 60;
    sessionBreak = 0;
    
    //Update the time-left element with value of globalSessionMinutes and globalSeconds.
    document.getElementById("time-left").innerHTML = `${globalSessionMinutes}:00`;
    document.getElementById("session-length").innerHTML = `${globalSessionMinutes}`;
    document.getElementById("break-length").innerHTML = `${globalBreakMinutes}`;
    document.getElementById("session-container").style.borderColor = "#0b00e0";
    
      document.getElementById("timer-label").innerHTML = "Session";
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
  }