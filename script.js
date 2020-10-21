const dialOne = document.getElementById('dial-1');
const dialTwo = document.getElementById('dial-2');
const logoContainer = document.getElementById('logo-container');
const trackOne = document.getElementById('track-1');
const coords = document.getElementById('coords');

//log coords
function logCoords(event) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.round((event.clientX / width) * 120);
  const y = Math.round((event.clientY / height) * 100);

  coords.innerHTML = `x = ${x}, y = ${y}`;

  dialOne.style.transition = "all 0s linear";
  dialOne.style.transform = `rotate(${-120 + (x*2)}deg)`

} 

document.addEventListener('mousemove', logCoords);

//dial functions and event listeners
function rotateDials(event) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.round((event.clientX / width) * 100);
  const y = Math.round((event.clientY / height) * 100);

  console.log(`x = ${x}, width = ${width}`);

  if(y < 750 && y > 650) {
    dialOne.style.transition = "all 0.5s linear";
    dialOne.style.transform = "rotate(-90deg)";
    dialTwo.style.transition = "all 0.5s linear";
    dialTwo.style.transform = "rotate(-90deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.1;
  } else if (y < 650 && y > 550) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(-45deg)";
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(-45deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.3;
  } else if (y < 540 && y > 340) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(0deg)";
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(0deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.5;
  } else if (y < 340 && y > 140) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(45deg)";
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(45deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.7;
  } else if(y < 140 && y > 50) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(90deg)";
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(90deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 0.9;
  } else if (y < 50) {
    dialOne.style.transition = "all 0.75s linear";
    dialOne.style.transform = "rotate(120deg)";
    dialTwo.style.transition = "all 0.75s linear";
    dialTwo.style.transform = "rotate(120deg)";
    trackOne.play();
    trackOne.muted = false;
    trackOne.volume = 1;
  } else {
    dialOne.style.transform = "rotate(-120deg)";
    dialTwo.style.transform = "rotate(-120deg)";
    trackOne.muted = true;
  }
}

document.addEventListener('mousemove', rotateDials);