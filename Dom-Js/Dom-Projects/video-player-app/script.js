const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const volume = document.getElementById("volume");
const mute = document.getElementById("mute");
const speed = document.getElementById("speed");
const fullscreen = document.getElementById("fullscreen");

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Play/Pause
playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸️";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

// Forward and Backward
forward.addEventListener("click", () => (video.currentTime += 10));
backward.addEventListener("click", () => (video.currentTime -= 10));

// Update Progress
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
  time.textContent = `${formatTime(video.currentTime)} / ${formatTime(
    video.duration
  )}`;
});

video.addEventListener("loadedmetadata", () => {
  progress.max = video.duration;
});

// Seek
progress.addEventListener("input", () => {
  video.currentTime = progress.value;
});

// Volume
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// Mute
mute.addEventListener("click", () => {
  video.muted = !video.muted;
  mute.textContent = video.muted ? "🔇" : "🔊";
});

// Speed
speed.addEventListener("change", () => {
  video.playbackRate = speed.value;
});

// Fullscreen
fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ": // space
      playPause.click();
      e.preventDefault();
      break;
    case "ArrowRight":
      forward.click();
      break;
    case "ArrowLeft":
      backward.click();
      break;
    case "ArrowUp":
      video.volume = Math.min(video.volume + 0.1, 1);
      volume.value = video.volume;
      break;
    case "ArrowDown":
      video.volume = Math.max(video.volume - 0.1, 0);
      volume.value = video.volume;
      break;
    case "f":
      fullscreen.click();
      break;
    case "m":
      mute.click();
      break;
  }
});
