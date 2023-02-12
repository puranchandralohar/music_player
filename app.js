const clock = document.querySelector(".bar_clock");
const audio = document.querySelector("audio");

const songLabel = document.querySelector('.label');
const songName = document.querySelector('.music_name');
const songDetails = document.querySelector('.music_detals');


const playBtn = document.querySelector(".play_pause");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Clock
const getTime = setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.innerText = time;
}, 1000);

const songs = [{
    "music":"Kuch Toh Hai",
    "music_label":"https://c.saavncdn.com/677/Do-Lafzon-Ki-Kahani-Hindi-2016-500x500.jpg",
    "music_details": "Do Lafzon Ki Kahani  by Armaan Malik"
},{
    "music":"Ek Mulaqat",
    "music_label":"https://c.saavncdn.com/989/Sonali-Cable-Hindi-2018-20180726-500x500.jpg",
    "music_details": "Sonali Cable  by Jubin Nautiyal"
},{
    "music":"Mareez E Ishq",
    "music_label":"https://c.saavncdn.com/722/Zid-Hindi-2014-20190516122947-500x500.jpg",
    "music_details": "Zid by Toshi Sabri, Arijit Singh"
}]

let isPlaying =false;
let index = 0;

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

const nowPlaying =(song)=>{
    songLabel.src = song.music_label;
    songName.innerText = song.music_details;
    audio.src = `music/${song.music}.mp3`
}

const previous = () => {
    index--;
    if(index < 0){
        index = songs.length - 1;
    }
    nowPlaying(songs[index])
    playSong()
}

const next = () => {
    index++;
    if(index > songs.length - 1){
        index = 0;
    }
    nowPlaying(songs[index])
    playSong()
}

nextBtn.addEventListener('click',next)
prevBtn.addEventListener('click',previous)

nowPlaying(songs[index])

