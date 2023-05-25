const ballColors = ["linear-gradient(90deg, rgba(189,40,40,1) 25%, rgba(55,10,14,1) 75%)", "linear-gradient(90deg, rgba(191,16,16,1) 15%, rgba(111,14,23,1) 65%)", "linear-gradient(90deg, rgba(43,167,4,1) 25%, rgba(6,79,35,1) 45%)", "linear-gradient(90deg, rgba(42,136,12,1) 15%, rgba(5,64,29,1) 65%)", "linear-gradient(90deg, rgba(19,82,217,1) 15%, rgba(23,13,111,1) 55%)", "linear-gradient(90deg, rgba(35,123,242,1) 20%, rgba(39,65,148,1) 35%)", "linear-gradient(90deg, rgba(207,212,28,1) 20%, rgba(123,125,33,1) 35%)", "linear-gradient(90deg, rgba(212,218,56,1) 15%, rgba(111,100,29,1) 45%)", "linear-gradient(90deg, rgba(192,192,192,1) 15%, rgba(107,107,107,1) 45%)", "linear-gradient(90deg, rgba(192,192,192,1) 12%, rgba(88,88,88,1) 30%)", "linear-gradient(90deg, rgba(192,192,192,1) 20%, rgba(88,88,88,1) 55%)", "linear-gradient(90deg, rgba(157,8,242,1) 16%, rgba(90,0,117,1) 40%)", "linear-gradient(90deg, rgba(166,66,223,1) 20%, rgba(77,0,99,1) 48%)"];

const clipartImgLinks = [
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clip-art-free-clipart-images-4.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clip-art-free-clipart-images.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-6-merry.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-christmas-clipart.jpg",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clip-art-free-images-graphics-clipartcow.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-kid-2.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-holly-clipart-public-domain-christmas-clip-art-images-and.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-christmas-clipart-animated-clip-art-santa-image-5.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-christmas-clipart-borders-printable.jpeg",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-religious-christmas-clipart-public-domain-clip.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Cute-christmas-penguin-clipart-kid.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-christmas-clipart-2.jpg",
  "https://clipartix.com/wp-content/uploads/2016/09/Merry-christmas-images-clip-art-merry-and-new-year-image.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-free-and-formercial-use.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clip-art-free-clipart-images-6.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-borders-free-for-mac-4.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-2.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Winnie-the-pooh-christmas-clip-art-images-2-disney-galore.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-4.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-stocking-clip-art-christmas-1-clipart.jpg",
  "https://clipartix.com/wp-content/uploads/2016/09/Merry-christmas-transparent-clipart-kid.png",
  "https://clipartix.com/wp-content/uploads/2016/09/Free-christmas-clipart-vintage-holly.jpg",
  "https://clipartix.com/wp-content/uploads/2016/09/Disney-goofy-christmas-clipart-free-images.gif",
  "https://clipartix.com/wp-content/uploads/2016/09/Christmas-clipart-images-clipart.jpeg"
];

const randomizedClipartLinks = clipartImgLinks.slice(0).sort(() => Math.random() - 0.5);


const balls = document.querySelectorAll('.ball');
const ballContainers = document.querySelectorAll('.ballcontainer');

const changeBallColors = () => {
for (let i = 0; i < balls.length; i++) {
  const randomColorNumber = Math.floor(Math.random() * ballColors.length);
  balls[i].style.background = ballColors[randomColorNumber];
}
}

const changeBallContainerHeight = () => {
  for (let i = 0; i < ballContainers.length; i++) {
    const randomTopNumber = Math.floor(Math.random() * 28) + 1;
    ballContainers[i].style.top = `${randomTopNumber}%`;
    
    if (i > 0) {
      //If the previous ballContainer div is within 5% of the current ballContainer div, this will add 9% to the style.top of the current ballContainer div so the balls aren't hiding each other.
      let gt = parseFloat(ballContainers[i].style.top) >= parseFloat(ballContainers[i-1].style.top)+5;
      let lt = parseFloat(ballContainers[i].style.top) <= parseFloat(ballContainers[i-1].style.top)-5;
      
      if (lt === false && gt === false) {
        
        ballContainers[i].style.top = `${parseFloat(ballContainers[i].style.top)-9}%`
      }
    }
  }
}

const ballClick = (ballID) => {
  
  let screenWidth = window.innerWidth;
  let currentBallContainer = document.getElementById(ballID);
  let ballNum = ballID.substring(13);
  let currentMessage = document.getElementById(`hiddenMessage${ballNum}`)
  let closeMessageBtn = document.getElementById(`closeMessage${ballNum}`);
  let hiddenMessage = document.getElementById(`hiddenMessage${ballNum}`);
let currentDate = new Date();
let currentDay = JSON.stringify(currentDate).substring(9,11);
let currentMonth = JSON.stringify(currentDate).substring(6,8);
  
  //If enabled, only allows you to open up the correct ball for each day in December. So to open up ball 10 the date must be December 10th for instance. 
  
  //if (currentMonth === "12" && currentDay === ballNum) {
    
  $(document).ready(function() {
    $('#ball' + ballNum).addClass('animate__animated animate__fadeOut');
    $('#balltext' + ballNum).addClass('animate__animated animate__fadeOut');
  });
  
  currentBallContainer.style.zIndex = 2;
  currentBallContainer.style.width = "5.5%";
  currentMessage.style.opacity = 1;
  
  
  //Sets the position of the message box based on ball number.
  if (screenWidth > 800) {
    
  if (ballNum >= 1 && ballNum <= 4) {
    currentMessage.style.left = "0%";
    closeMessageBtn.style.left = "460%";
  }
  else if (ballNum >= 5 && ballNum <= 22) {
    currentMessage.style.left = "-200%";
    closeMessageBtn.style.left = "260%";
  }
  else {
    currentMessage.style.left = "-401%";
    closeMessageBtn.style.left = "60%";
    closeMessageBtn.style.zIndex = 3;
  }
  }
  if (screenWidth < 800) {
    currentBallContainer.style.display = "block";
    currentBallContainer.style.position = "fixed";
    currentBallContainer.style.width = "100vw";
    currentBallContainer.style.height = "100vh";
    currentBallContainer.style.zIndex = 5;
    currentBallContainer.style.top = 0;
    currentBallContainer.style.left = "50%";
    hiddenMessage.style.height = "100%";
    hiddenMessage.style.width = "100%";
    hiddenMessage.style.zIndex = 5;
    hiddenMessage.style.position = "fixed";
    hiddenMessage.style.top = 0;
    hiddenMessage.style.left = 0;
    closeMessageBtn.style.left = screenWidth-34+"px";
    closeMessageBtn.style.height = "2em";
    closeMessageBtn.style.width = "2em";
  }
  //}
}

function closeMessage() {
let parentNodeId = event.target.parentNode.id;
let parentNode = document.getElementById(parentNodeId);
let currentBallContainer = document.getElementById(`ballcontainer${parentNodeId.substring(13)}`)
let ballclipDiv = currentBallContainer.querySelector('.ballclip');

  
  setTimeout(function() {
 currentBallContainer.style.display = "none";
}, 50);
  parentNode.style.display = "none";
  ballclipDiv.style.display = "none";
  
  
}

const setClipartImgs = () => {
  let imgs = document.querySelectorAll('.clipartImg');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = randomizedClipartLinks[i];
  }
}

changeBallColors();
changeBallContainerHeight();
setClipartImgs();

