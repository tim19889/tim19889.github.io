const clips = {
  heater1: "Q",
  heater2: "W",
  heater3: "E",
  heater4: "A",
  clap: "S",
  openhh: "D",
  kicknhat: "Z",
  kick: "X",
  closedhh: "C"
}
const keys = []


$(document).ready(function() {
    $("#drum-machine").addClass("animate__animated animate__rollIn");
  });

$(document).keydown(function(keyPressed) {
  
  switch (keyPressed.keyCode) {
    case 81:
      document.getElementById("Q").play();
      document.getElementById("display").innerHTML = "HEATER1";
      break; 
      case 87:
      document.getElementById("W").play();
      document.getElementById("display").innerHTML = "HEATER2";
      break; 
      case 69:
      document.getElementById("E").play();
      document.getElementById("display").innerHTML = "HEATER3";
      break; 
      case 65:
      document.getElementById("A").play();
      document.getElementById("display").innerHTML = "HEATER4";
      break; 
      case 83:
      document.getElementById("S").play();
      document.getElementById("display").innerHTML = "CLAP";
      break; 
      case 68:
      document.getElementById("D").play();
      document.getElementById("display").innerHTML = "OPENHH";
      break; 
      case 90:
      document.getElementById("Z").play();
      document.getElementById("display").innerHTML = "KICKNHAT";
      break; 
      case 88:
      document.getElementById("X").play();
      document.getElementById("display").innerHTML = "KICK";
      break; 
      case 67:
      document.getElementById("C").play();
      document.getElementById("display").innerHTML = "CLOSEDHH";
      break; 
  }
  
  });



let playClip = (clicked_id) => {
  let clip = document.getElementById(clips[clicked_id]);
  

let volume = document.querySelector("#volume-slider");
volume.addEventListener("change", function(e) {
clip.volume = e.currentTarget.value / 100;
})
  clip.play();
 document.getElementById("display").innerHTML = clicked_id.toUpperCase();
  
 $(`#${clicked_id}`).addClass("animate__animated animate__pulse");
let pulseFunc = () => {
  $(`#${clicked_id}`).removeClass("animate__animated animate__pulse");
};
setTimeout(pulseFunc, 500);
};

let powerFlag = 1;
const togglePower = () => {
  if (powerFlag === 1) {
    document.getElementById("onoff-container").style.justifyContent = "right";
    document.getElementById("display").innerHTML = "";
  $(".drum-pad").attr("disabled", true);
    
    powerFlag = 2;
  }
  
  else if (powerFlag === 2) {
    document.getElementById("onoff-container").style.justifyContent = "left";
    $(".drum-pad").attr("disabled", false);
    
    powerFlag = 1;
  }
}








