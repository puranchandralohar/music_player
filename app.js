const clock = document.querySelector(".bar_clock");
const audio = document.querySelector("audio");

const playBtn = document.querySelector(".play_pause");

// Clock
const getTime = setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.innerText = time;
}, 1000);


let isPlaying =false;

const playSong = () => {
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause">'
    audio.play();
}

const pauseSong = () => {
    isPlaying = false;
    playBtn.innerHTML = '<i class="fa-solid fa-play">'
    audio.pause();
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
})

