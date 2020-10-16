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


//dial 1 functions and event listeners
//dial 1 two-clicks right
function rotateDialOneRightTwoClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(45deg)";
}

//dial 1 two-clicks left
function rotateDialOneLeftTwoClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(-45deg)";

}

//dial 1 four-clicks right
function rotateDialOneRightFourClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(90deg)";
}

//dial 1 four-clicks left
function rotateDialOneLeftFourClicks() {
  dialOne.style.transition = "all 0.7s ease";
  dialOne.style.transform = "rotate(-90deg)";

}


//return dial to start
function returnDialOne() {
  dialOne.style.transform = "rotate(0)";
}

/*
logoContainer.addEventListener('mouseover', rotateDialOneRightTwoClicks);
logoContainer.addEventListener('click', rotateDialOneLeftTwoClicks);
dialOne.addEventListener('mouseenter', rotateDialOneRightFourClicks);
dialOne.addEventListener('dblclick', rotateDialOneLeftFourClicks);
logoContainer.addEventListener('mouseleave', returnDialOne);
*/

//dial 2 functions and event listeners
//dial 2 two-clicks right
function rotateDialTwoRightTwoClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(45deg)";
}

//dial 2 two-clicks left
function rotateDialTwoLeftTwoClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(-45deg)";

}

//dial 2 four-clicks right
function rotateDialTwoRightFourClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(90deg)";
}

//dial 2 four-clicks left
function rotateDialTwoLeftFourClicks() {
  dialTwo.style.transition = "all 0.7s ease";
  dialTwo.style.transform = "rotate(-90deg)";

}


//return dial to start
function returnDialTwo() {
  dialTwo.style.transform = "rotate(0)";
}

/*
logoContainer.addEventListener('mouseover', rotateDialTwoRightTwoClicks);
logoContainer.addEventListener('click', rotateDialTwoLeftTwoClicks);
dialTwo.addEventListener('mouseenter', rotateDialTwoRightFourClicks);
dialTwo.addEventListener('dblclick', rotateDialTwoLeftFourClicks);
logoContainer.addEventListener('mouseleave', returnDialTwo);
*/