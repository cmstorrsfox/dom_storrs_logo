const dialOne = document.getElementById('dial-1');
const dialTwo = document.getElementById('dial-2');
const logoContainer = document.getElementById('logo-container');
const trackOne = document.getElementById('track-1');
const trackTwo = document.getElementById('track-2');


//dial 1 functions and event listeners
//dial 1 
function rotateDialOne(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`x = ${x} and y = ${y}`);

  if(y < 870 && y > 750 && x < 600) {
    dialOne.style.transition = "all 0.5s linear";
    dialOne.style.transform = "rotate(-90deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.1;
  } else if (y < 750 && y > 540 && x < 600) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(-45deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.3;
  } else if (y < 540 && y > 340 && x < 600) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(0deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.5;
  } else if (y < 340 && y > 140 && x < 600) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(45deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.7;
  } else if(y < 140 && y > 50 && x < 600) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(90deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.9;
  } else if (y < 50 && x < 600) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(120deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 1;
  } else {
    dialOne.style.transform = "rotate(-120deg)";
    trackOne.muted = true;
  }
}

document.addEventListener('mousemove', rotateDialOne);


//dial 2 functions and event listeners
//dial 2 
function rotateDialTwo(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`x = ${x} and y = ${y}`);

  if(y < 870 && y > 750 && x > 600) {
    dialTwo.style.transition = "all 0.5s linear";
    dialTwo.style.transform = "rotate(-90deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 0.1;
  } else if (y < 750 && y > 540 && x > 600) {
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(-45deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 0.3;
  } else if (y < 540 && y > 340 && x > 600) {
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(0deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 0.5;
  } else if (y < 340 && y > 140 && x > 600) {
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(45deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 0.7;
  } else if(y < 140 && y > 50 && x > 600) {
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(90deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 0.9;
  } else if (y < 50 && x > 600) {
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(120deg)";
    trackTwo.play();
    trackTwo.muted = false;
    trackTwo.volume = 1;
  } else {
    dialTwo.style.transform = "rotate(-120deg)";
    trackTwo.muted = true;
  }
}

document.addEventListener('mousemove', rotateDialTwo);