AOS.init();

// MODAL
function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");

  modal.style.display = "flex";
  img.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
AOS.init();

// REDIRECCIÓN A GOOGLE DRIVE
function openLink() {
  window.open("https://drive.google.com/TU_LINK_AQUI", "_blank");
}

document.addEventListener("click", () => {
  audio.play();
}, { once: true });

AOS.init();

// AUDIO NIVEL DIOS
const audio = document.getElementById("bg-music");
let isPlaying = false;

// Volumen inicial
audio.volume = 0;

// AUTO PLAY AL PRIMER CLICK
document.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    fadeIn(audio);
    isPlaying = true;
  }
}, { once: true });

// BOTÓN CONTROL
function toggleAudio() {
  const btn = document.querySelector(".audio-control");

  if (audio.paused) {
    audio.play();
    fadeIn(audio);
    btn.innerHTML = "🔊";
  } else {
    fadeOut(audio);
    btn.innerHTML = "🔇";
  }
}

// FADE IN
function fadeIn(audio) {
  let vol = 0;
  audio.volume = 0;

  let fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// FADE OUT
function fadeOut(audio) {
  let vol = audio.volume;

  let fade = setInterval(() => {
    if (vol > 0) {
      vol -= 0.05;
      audio.volume = vol;
    } else {
      audio.pause();
      clearInterval(fade);
    }
  }, 200);
}

// LINK DRIVE
function openLink() {
  window.open("https://drive.google.com/TU_LINK_AQUI", "_blank");
}