const songs = [

{
title:"Song One",
artist:"Artist One",
src:"songs/song1.mp3"
},

{
title:"Song Two",
artist:"Artist Two",
src:"songs/song2.mp3"
},

{
title:"Song Three",
artist:"Artist Three",
src:"songs/song3.mp3"
}

];

const audio=document.getElementById("audio");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const play=document.getElementById("play");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const progress=document.getElementById("progress");
const duration=document.getElementById("duration");
const current=document.getElementById("current");
const volume=document.getElementById("volume");
const playlist=document.getElementById("playlist");

let index=0;

loadSong(index);

function loadSong(i){

audio.src=songs[i].src;
title.innerText=songs[i].title;
artist.innerText=songs[i].artist;

highlight();
}

function playSong(){

audio.play();
play.innerHTML="⏸";
}

function pauseSong(){

audio.pause();
play.innerHTML="▶";
}

play.onclick=()=>{

if(audio.paused)
playSong();
else
pauseSong();

};

next.onclick=()=>{

index++;

if(index>=songs.length)
index=0;

loadSong(index);
playSong();

};

prev.onclick=()=>{

index--;

if(index<0)
index=songs.length-1;

loadSong(index);
playSong();

};

audio.addEventListener("timeupdate",()=>{

progress.max=audio.duration;

progress.value=audio.currentTime;

current.innerText=format(audio.currentTime);

duration.innerText=format(audio.duration);

});

progress.oninput=()=>{

audio.currentTime=progress.value;

};

volume.oninput=()=>{

audio.volume=volume.value;

};

audio.onended=()=>{

index++;

if(index>=songs.length)
index=0;

loadSong(index);
playSong();

};

function format(time){

if(isNaN(time)) return "0:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}

songs.forEach((song,i)=>{

let li=document.createElement("li");

li.innerText=song.title+" - "+song.artist;

li.onclick=()=>{

index=i;

loadSong(index);

playSong();

};

playlist.appendChild(li);

});

function highlight(){

const items=document.querySelectorAll("#playlist li");

items.forEach(item=>item.classList.remove("active"));

items[index].classList.add("active");

}