"use strict";

// tjek hvilke medaljer er allerede vundet 
const lightMedal = localStorage.getItem("lightMedal");
const heatMedal = localStorage.getItem("heatMedal");
const waterMedal = localStorage.getItem("waterMedal");
const elMedal = localStorage.getItem("elMedal");


if (lightMedal === "true") {
  document.querySelector(".light-placeholder").classList.add("hide");
  document.querySelector(".light-icon").classList.remove("hide");
}
if (heatMedal === "true") {
  document.querySelector(".heat-placeholder").classList.add("hide");
  document.querySelector(".heat-icon").classList.remove("hide");
}
if (waterMedal === "true") {
  document.querySelector(".water-placeholder").classList.add("hide");
  document.querySelector(".water-icon").classList.remove("hide");
}
if (elMedal === "true") {
  document.querySelector(".el-placeholder").classList.add("hide");
  document.querySelector(".el-icon").classList.remove("hide");
}


window.addEventListener("load", start);

const tv = document.querySelector("#tv");
const NSwitch = document.querySelector("#switch");
const lamp = document.querySelector("#lamp");
const playstation = document.querySelector("#playstation");
const computer = document.querySelector("#computer");

const tvOutline = document.querySelector(".tv-outline")
const switchOutline = document.querySelector(".switch-outline");
const lampOutline = document.querySelector(".lamp-outline");
const playstationOutline = document.querySelector(".playstation-outline");
const computerOutline = document.querySelector(".computer-outline");

const allObjects = [tv, NSwitch, lamp, playstation, computer];

const introAudio = document.querySelector(".intro-audio");
const rightAudio = document.querySelector(".right-audio");
const lvlComplAudio = document.querySelector(".lvl-complete-audio");

let points = 0;


function start() {
  console.log("start");
  
  introAudio.play();

  document.querySelector(".bg-music").volume = 0.1;
  document.querySelector(".bg-music").play()


  introAudio.addEventListener("ended", hideBubble)

  allObjects.forEach((elm) => {
    elm.addEventListener("click", clickObject);
  });

}

function hideBubble() {
  document.querySelector(".bg-music").volume = 0.4;

  document.querySelector(".taleboble").classList.add("hide");
}

function clickObject() {
  document.querySelector(".bg-music").volume = 0.4;

  introAudio.pause();
  document.querySelector(".taleboble").classList.add("hide");
  
  rightAudio.currentTime = 0;
  rightAudio.play();

  points++;

  console.log("Object found");
  if (this === tv) {
   tvOutline.classList.remove("hide")
  } else if (this === computer) {
    computerOutline.classList.remove("hide");
  } else if (this === NSwitch) {
    switchOutline.classList.remove("hide");
  } else if (this === playstation) {
    playstationOutline.classList.remove("hide");
  } else if (this === lamp) {
    lampOutline.classList.remove("hide");
  }

  if (points === 5) {
    rightAudio.addEventListener("ended", levelComplete);
  }
}

function levelComplete() {


  console.log("level complete")

  if (lightMedal === "false") {
    lvlComplAudio.play()

    document.querySelector(".bg-music").volume = 0.1;


    document.querySelector(".el-placeholder").classList.add("icon-hide");
    document.querySelector(".el-icon").classList.remove("hide");
    document.querySelector(".el-icon").classList.add("icon-show");
    // set localstorage
    localStorage.setItem("elMedal", "true");


  }
}
