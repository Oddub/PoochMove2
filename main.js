// typing
const textElement = document.getElementById('text');
const textToType = 'PoochMove 2.0 2024.';
const typingSpeed = 100;
const retractSpeed = 50;
const delayBetweenAnimations = 1000;

let charIndex = 0;
let isRetracting = false;

function type() {
  const currentText = textToType.slice(0, charIndex);
  textElement.textContent = currentText;
  charIndex++;

  if (isRetracting) {
    if (charIndex <= 0) {
      isRetracting = false;
      setTimeout(type, delayBetweenAnimations);
    } else {
      setTimeout(retract, retractSpeed);
    }
  } else {
    if (charIndex <= textToType.length) {
      setTimeout(type, typingSpeed);
    } else {
      isRetracting = true;
      setTimeout(retract, delayBetweenAnimations);
    }
  }
}

function retract() {
  charIndex--;
  const currentText = textToType.slice(0, charIndex);
  textElement.textContent = currentText;
  if (!isRetracting && charIndex > 0) {
    setTimeout(retract, retractSpeed);
  } else {
    if (isRetracting) {
      setTimeout(type, typingSpeed);
    }
  }
}

type();

// video
  const video = document.getElementById("poochvid");

  function loopVideo() {
    video.currentTime = 0;
    video.play(); //
  }

  function stopVideoAfter25Seconds() {
    setTimeout(function () {
      video.pause();
      loopVideo();
    }, 25000);
  }

  video.addEventListener("play", function () {
    stopVideoAfter25Seconds();
  });




