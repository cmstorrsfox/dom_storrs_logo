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
  const x = Math.round((event.clientX / width) * 120);
  const y = Math.round((event.clientY / height) * 100);

  coords.innerHTML = `x = ${x}, y = ${y}`;

  if(x < 60) {
    dialOne.style.transition = "all 0s linear";
    dialOne.style.transform = `rotate(${-120 + (x*2)}deg)`;
  } else { 
    dialOne.style.transform = "rotate(0deg)";
  }

  if(x > 60) {
    dialTwo.style.transition = "all 0s linear";
    dialTwo.style.transform = `rotate(${-120 + (x*2)}deg)`;
  } else {
    dialTwo.style.transform = "rotate(0deg)";
  }

 
}

document.addEventListener('mousemove', rotateDials);