let slideShowStatus = 1;
let imgDisplay = 0;
let interval;
let pauseImg = document.getElementById("pause");
let playImg = document.getElementById("play");
let welcome1 = document.getElementById("welcome1");
let welcome2 = document.getElementById("welcome2");

const startSlideShow = () => {
	console.log("I'm running")
  interval = setInterval(function() {
    if (imgDisplay === 0) {
    welcome1.style.display = "none";
    welcome2.style.display = "block";
      imgDisplay = 1;
    }
    else {
      welcome2.style.display = "none";
    welcome1.style.display = "block";
      imgDisplay = 0;
    }
    }, 6000)
}
const startStopSlideShow = () => {
  if (slideShowStatus === 1) {
  clearInterval(interval);
  invterval = undefined;
    slideShowStatus = 0;
    playImg.style.display = "none";
    playImg.style.opacity = 1;
    pauseImg.style.display = "block";
    setTimeout(() => {
  pauseImg.style.opacity = 0;
}, 1000);
  }
  else {
    startSlideShow();
    slideShowStatus = 1;
    pauseImg.style.display = "none";
    pauseImg.style.opacity = 1;
    playImg.style.display = "block";
    setTimeout(() => {
  playImg.style.opacity = 0;
}, 1000);
  }
}
