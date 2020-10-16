const dialOne = document.getElementById('dial-1');
const dialTwo = document.getElementById('dial-2');
const logoContainer = document.getElementById('logo-container');
const turnZoneOneFourRight = document.getElementById('one-4-r');
const turnZoneOneTwoRight = document.getElementById('one-2-r');
const turnZoneOneFourLeft = document.getElementById('one-4-l');
const turnZoneOneTwoLeft = document.getElementById('one-2-l');
const turnZoneTwoFourRight = document.getElementById('two-4-r');
const turnZoneTwoTwoRight = document.getElementById('two-2-r');
const turnZoneTwoFourLeft = document.getElementById('two-4-l');
const turnZoneTwoTwoLeft = document.getElementById('two-2-l');
const trackOne = document.getElementById('track-1');
const trackTwo = document.getElementById('track-2');


//dial 1 functions and event listeners
//dial 1 two-clicks right
function rotateDialOneRightTwoClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(45deg)";
  trackOne.play();
  trackOne.muted = false;
  trackOne.volume = 0.75;
}

//dial 1 two-clicks left
function rotateDialOneLeftTwoClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(-45deg)";
  trackOne.play();
  trackOne.muted = false;
  trackOne.volume = 0.25;

}

//dial 1 four-clicks right
function rotateDialOneRightFourClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(90deg)";
  trackOne.play();
  trackOne.muted = false;
  trackOne.volume = 1;
}

//dial 1 four-clicks left
function rotateDialOneLeftFourClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(-90deg)";
  trackOne.play();
  trackOne.muted = false;
  trackOne.volume = 0.1;

}


//return dial to start
function returnDialOne() {
  dialOne.style.transform = "rotate(0)";
  trackOne.pause();
}

//event listeners for dial 1
turnZoneOneTwoRight.addEventListener('mouseenter', rotateDialOneRightTwoClicks);
turnZoneOneTwoLeft.addEventListener('mouseenter', rotateDialOneLeftTwoClicks);
turnZoneOneFourRight.addEventListener('mouseenter', rotateDialOneRightFourClicks);
turnZoneOneFourLeft.addEventListener('mouseenter', rotateDialOneLeftFourClicks);
logoContainer.addEventListener('mouseleave', returnDialOne);

//dial 2 functions and event listeners
//dial 2 two-clicks right
function rotateDialTwoRightTwoClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(45deg)";
  trackTwo.play();
  trackTwo.muted = false;
  trackTwo.volume = 0.75;
}

//dial 2 two-clicks left
function rotateDialTwoLeftTwoClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(-45deg)";
  trackTwo.play();
  trackTwo.muted = false;
  trackTwo.volume = 0.25;


}

//dial 2 four-clicks right
function rotateDialTwoRightFourClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(90deg)";
  trackTwo.play();
  trackTwo.muted = false;
  trackTwo.volume = 1;
}

//dial 2 four-clicks left
function rotateDialTwoLeftFourClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(-90deg)";
  trackTwo.play();
  trackTwo.muted = false;
  trackTwo.volume = 0.1;

}


//return dial to start
function returnDialTwo() {
  dialTwo.style.transform = "rotate(0)";
  trackTwo.pause();
}


turnZoneTwoTwoRight.addEventListener('mouseenter', rotateDialTwoRightTwoClicks);
turnZoneTwoTwoLeft.addEventListener('mouseenter', rotateDialTwoLeftTwoClicks);
turnZoneTwoFourRight.addEventListener('mouseenter', rotateDialTwoRightFourClicks);
turnZoneTwoFourLeft.addEventListener('mouseenter', rotateDialTwoLeftFourClicks);
logoContainer.addEventListener('mouseleave', returnDialTwo);

