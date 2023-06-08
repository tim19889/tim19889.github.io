let slideShowStatus = 1;
let imgDisplay = 0;
let interval;
let pauseImg = document.getElementById("pause");
let playImg = document.getElementById("play");
let welcome1 = document.getElementById("welcome1");
let welcome2 = document.getElementById("welcome2");
let mobileMenuStatus = 0;

const startSlideShow = () => {
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

function showHideEducation(divId) { 
  let screenWidth = window.innerWidth; 
  let eduTitleDiv = document.getElementById(`${divId}`);
 let eduContentDiv = document.getElementById(`educationcontent${divId[divId.length-1]}`);
  let pRightText = document.getElementById(`educationtitlerightp${divId[divId.length-1]}`);
  
  if (screenWidth > 1000) {
  if (eduContentDiv.style.height === "0px" || eduContentDiv.style.height === "") {
    
    switch (eduContentDiv.id[eduContentDiv.id.length-1]) {
      case "1" :
        eduContentDiv.style.height = "69px";
        break;
      case "2" :
        eduContentDiv.style.height = "760px";
        break;
      case "3" :
        eduContentDiv.style.height = "187px";
        break;
      case "4" :
        eduContentDiv.style.height = "330px";
        break;
    }
    eduTitleDiv.style.backgroundColor = "#2C98F0";
    eduTitleDiv.style.color = "white";
    eduContentDiv.style.border = "1px solid lightgray";
    pRightText.innerHTML = "-";
  }
    else {
    eduContentDiv.style.height = "0";
    eduContentDiv.style.border = "";
    pRightText.innerHTML = "+";
    eduTitleDiv.style.backgroundColor = "#F2F3F7";
    eduTitleDiv.style.color = "black";
  }
  }
  else if (screenWidth <= 1000) {
    if (eduContentDiv.style.height === "0px" || eduContentDiv.style.height === "") {
    
    switch (eduContentDiv.id[eduContentDiv.id.length-1]) {
      case "1" :
        eduContentDiv.style.height = "69px";
        break;
      case "2" :
        eduContentDiv.style.height = "980px";
        break;
      case "3" :
        eduContentDiv.style.height = "200px";
        break;
      case "4" :
        eduContentDiv.style.height = "350px";
        break;
    }
    eduTitleDiv.style.backgroundColor = "#2C98F0";
    eduTitleDiv.style.color = "white";
    eduContentDiv.style.border = "1px solid lightgray";
    pRightText.innerHTML = "-";
  }
    else {
    eduContentDiv.style.height = "0";
    eduContentDiv.style.border = "";
    pRightText.innerHTML = "+";
    eduTitleDiv.style.backgroundColor = "#F2F3F7";
    eduTitleDiv.style.color = "black";
  }
  }
}

const showMoreProjects = () => {
  let content = document.getElementById("content");
  let loadmoreprojects = document.getElementById("loadmoreprojects");
  let hiddenProjects = document.getElementsByClassName("hiddenprojects");
  let screenWidth = window.innerWidth;
  
  for (let i = 0; i < hiddenProjects.length; i++) {
    if (hiddenProjects[i].style.display === "" || hiddenProjects[i].style.display === "none") {
      hiddenProjects[i].style.display = "block";
      loadmoreprojects.innerHTML = "SHOW LESS";
    }
    else {
      hiddenProjects[i].style.display = "none";
      loadmoreprojects.innerHTML = "SHOW MORE";
    }
    }
  if (screenWidth > 1000) {
    if (loadmoreprojects.innerHTML === "SHOW LESS") 
    {content.style.height = "379em"}
    else {content.style.height = "290em"}
      }
  else {
    if (loadmoreprojects.innerHTML === "SHOW LESS") 
      {content.style.height = "665em"}
    else {content.style.height = "480em"}
  }
  }

const showMobileMenu = () => {
  let navigationMenu = document.getElementById("navigation");
  
  mobileMenuStatus = 1;
  navigationMenu.style.display = "block";
  navigationMenu.style.width = "50%";
}

const hideMobileMenu = () => {
  let screenWidth = window.innerWidth;
  let navigationMenu = document.getElementById("navigation");
  if (mobileMenuStatus === 1 && screenWidth <= 1000) {
    mobileMenuStatus = 0;
    navigationMenu.style.display = "none";
    
  }
}


const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const project4 = document.getElementById('project4');
const project5 = document.getElementById('project5');
const project6 = document.getElementById('project6');
const project7 = document.getElementById('project7');
const project8 = document.getElementById('project8');
const project9 = document.getElementById('project9');
const project10 = document.getElementById('project10');
const project11 = document.getElementById('project11');
const project12 = document.getElementById('project12');
const project13 = document.getElementById('project13');
const project14 = document.getElementById('project14');
const project15 = document.getElementById('project15');
const project16 = document.getElementById('project16');
const project17 = document.getElementById('project17');
const project18 = document.getElementById('project18');
const project19 = document.getElementById('project19');

  project1.addEventListener('click', () => {
window.open('https://tim19889.github.io/PasswordGeneratorHtml.html', '_blank');
  });
project2.addEventListener('click', () => {
window.open('https://tim19889.github.io/caesarscipher.html', '_blank');
  });
project3.addEventListener('click', () => {
window.open('https://tim19889.github.io/drummachine', '_blank');
  });
project4.addEventListener('click', () => {
window.open('https://tim19889.github.io/palindromechecker', '_blank');
  });
project5.addEventListener('click', () => {
window.open('https://tim19889.github.io/rnumeralconverter', '_blank');
  });
project6.addEventListener('click', () => {
window.open('https://tim19889.github.io/sessionclock', '_blank');
  });
project7.addEventListener('click', () => {
window.open('https://tim19889.github.io/quotemachine', '_blank');
  });
project8.addEventListener('click', () => {
window.open('https://tim19889.github.io/usphonevalidator', '_blank');
  });
project9.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/vYzzVdQ', '_blank');
  });
project10.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/rNZdvrJ', '_blank');
  });
project11.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/dyqdEKp', '_blank');
  });
project12.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/VwGeoaj', '_blank');
  });
project13.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/gOjPmbO', '_blank');
  });
project14.addEventListener('click', () => {
window.open('https://codepen.io/tim19889/pen/rNKgKWo', '_blank');
  });
project15.addEventListener('click', () => {
window.open('https://www.nailsvv.com/', '_blank');
  });
project16.addEventListener('click', () => {
window.open('https://github.com/tim19889/Powershell/blob/main/CreateUser-New.ps1', '_blank');
  });
project17.addEventListener('click', () => {
window.open('https://tim19889.github.io/christmascalendar', '_blank');
  });
project18.addEventListener('click', () => {
window.open('https://tim19889.github.io/newslettersignup.html', '_blank');
  });
project19.addEventListener('click', () => {
window.open('https://tim19889.github.io/agecalculator.html', '_blank');
  });


//The height of the #content div needs to be changed based on screen size and whether or not the hidden projects are being shown. This event listener takes care of that.
window.addEventListener("resize", function() {
  let screenWidth = window.innerWidth;
  let content = document.getElementById("content");
  let loadmoreprojects = document.getElementById("loadmoreprojects");
  let navigationMenu = document.getElementById("navigation");
  
  if (screenWidth > 1000) {
    navigationMenu.style.width = "20%";
    navigationMenu.style.display = "block";
  }
  if (screenWidth <= 1000) {
    navigationMenu.style.width = "50%";
    if (mobileMenuStatus === 0) {
      navigationMenu.style.display = "none";
    }
    else {
      navigationMenu.style.display = "block";
         }
  }
})
