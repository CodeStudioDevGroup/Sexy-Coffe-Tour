// 🔥 INICIALIZAR AOS
AOS.init();


/* =========================
   🎵 AUDIO NIVEL DIOS
========================= */

const audio = document.getElementById("bg-music");
let isPlaying = false;

// Volumen inicial
audio.volume = 0;

// Auto play en primera interacción
document.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play().catch(() => {});
    fadeIn();
    isPlaying = true;
  }
}, { once: true });

// Botón control audio
function toggleAudio() {
  const btn = document.querySelector(".audio-control");

  if (audio.paused) {
    audio.play();
    fadeIn();
    btn.innerHTML = "🔊";
  } else {
    fadeOut();
    btn.innerHTML = "🔇";
  }
}

// Fade in
function fadeIn() {
  let vol = 0;

  let fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// Fade out
function fadeOut() {
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


/* =========================
   🔞 AGE GATE NIVEL DIOS
========================= */

window.addEventListener("load", () => {
  const gate = document.getElementById("age-gate");

  // Bloquear scroll al inicio
  document.body.style.overflow = "hidden";

  // Si ya aceptó antes
  if (localStorage.getItem("ageAccepted") === "true") {
    gate.classList.remove("active");
    gate.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Aceptar edad
function acceptAge() {
  localStorage.setItem("ageAccepted", "true");

  const gate = document.getElementById("age-gate");

  // Animación salida
  gate.classList.remove("active");

  setTimeout(() => {
    gate.style.display = "none";
    document.body.style.overflow = "auto";
  }, 500);
}

// Salir del sitio
function exitSite() {
  window.location.href = "https://www.google.com";
}


/* =========================
   🔗 LINKS
========================= */

function openLink() {
  window.open("https://drive.google.com/TU_LINK_AQUI", "_blank");
}


/* =========================
   🖼️ MODAL (si lo usas después)
========================= */

function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");

  if (modal && img) {
    modal.style.display = "flex";
    img.src = src;
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}