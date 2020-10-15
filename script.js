const dialOne = document.getElementById('dial-1');
const dialTwo = document.getElementById('dial-2');
const logoContainer = document.getElementById('logo-container');
const coordDisplay = document.getElementById('display-coords');

//function to log position
function logPos(event) {
  const x = event.clientX;
  const y = event.clientY;
  coordDisplay.innerHTML = `X = ${x}, Y = ${y}`
}

logoContainer.addEventListener('click', logPos);

//dial 1 functions and event listeners
function rotateDialOneRight(event) {
  const x = event.clientX;
  const y = event.clientY;

  if(x > 360 && x < 490 && y < 220)  {

    dialOne.style.transition = "all 0.7s ease";
    dialOne.style.transform = "rotate(90deg)";
    console.log(`dial right running at ${x} and ${y}`)
  } 
}

function rotateDialOneLeft(event) {
  const x = event.clientX;
  const y = event.clientY;

  if(x > 174 && x < 320 && y < 220)  {
    dialOne.style.transition = "all 0.7s ease";
    dialOne.style.transform = "rotate(-90deg)";
    console.log(`dial left running at ${x} and ${y}`)

  }
}

//return dial to start
function returnDialOne() {
  dialOne.style.transform = "rotate(0)";
}


logoContainer.addEventListener('mousemove', rotateDialOneRight);
logoContainer.addEventListener('mousemove', rotateDialOneLeft);
logoContainer.addEventListener('mouseleave', returnDialOne);


//dial 2 functions and event listeners
function rotateDialTwoRight(event) {
  const x = event.clientX;
  const y = event.clientY;

  if(x > 688 && x < 815 && y > 120 && y < 320)  {

    dialTwo.style.transition = "all 0.7s ease";
    dialTwo.style.transform = "rotate(90deg)";
    console.log(`dial right running at ${x} and ${y}`)
  } 
}

function rotateDialTwoLeft(event) {
  const x = event.clientX;
  const y = event.clientY;

  if(x > 450 && x < 655 && y > 120 && y < 320)  {
    dialTwo.style.transition = "all 0.7s ease";
    dialTwo.style.transform = "rotate(-90deg)";
    console.log(`dial left running at ${x} and ${y}`)

  }
}

//return dial to start
function returnDialTwo() {
  dialTwo.style.transform = "rotate(0)";
}


logoContainer.addEventListener('mousemove', rotateDialTwoRight);
logoContainer.addEventListener('mousemove', rotateDialTwoLeft);
logoContainer.addEventListener('mouseleave', returnDialTwo);
