let progress = document.getElementById("progress");
let controlIcon = document.getElementById("control-icon");
let song = document.getElementById("song");
let source = document.getElementById("source");
let title = document.getElementById("title");
let singer = document.getElementById("singer");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }else{
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}


const songs = [
    {title:"Despacito",singer:"Luis Fonsi ft. Puerto Rican",url:"media/music/despacito.mp3"},
    {title:"Afsana Banake",singer:"",url:"media/music/AfsanaBanake.mp3"},
    {title:"Ashiqana Alam",singer:"",url:"media/music/AshiqanaAlam.mp3"},
    {title:"Ashiq Banaya",singer:"",url:"media/music/AshiqBanaya.mp3"},
    {title:"Baaton ko Teri",singer:"",url:"media/music/BaatonKoTeri.mp3"},
    {title:"Bekhudi",singer:"",url:"media/music/Bekhudi.mp3"},
    {title:"Bewajah",singer:"",url:"media/music/Bewajah.mp3"},
    {title:"Bhool Bhulaiya Title",singer:"",url:"media/music/BhoolBhulaiyaa3.mp3"},
    {title:"Bichdann",singer:"",url:"media/music/Bichdann.mp3"},
    {title:"Kashish",singer:"",url:"media/music/kashish.mp3"},
    {title:"Kissik Pushpa 2",singer:"",url:"media/music/KissikPushpa2.mp3"},
    {title:"Peelings Pushpa 2",singer:"",url:"media/music/PeelingsPushpa2.mp3"},
    {title:"Singham Again Title",singer:"",url:"media/music/SinghamAgain.mp3"} 
]

let currentSongIndex=0;

function loadSong(index){
    source.src = songs[index].url;
    song.load();
    song.play();
    title.textContent = `${songs[index].title}`;
    singer.textContent = `${songs[index].singer}`;
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}

function nextSong(){
    currentSongIndex = (currentSongIndex+1) % songs.length;
    loadSong(currentSongIndex);
}
function prevSong(){
    currentSongIndex = (currentSongIndex-1)%songs.length;
    loadSong(currentSongIndex);
}

loadSong(currentSongIndex);
