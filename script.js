let back = document.getElementById("back");
let play = document.getElementById("play");
let forward = document.getElementById("forward");
let screen = document.getElementById("screen");
let title=document.getElementById("title");
let progress=document.getElementById("music-bar")
let Playtime = document.getElementById('playTime')
let index = 0;
let onOff = 0
let songs = [{name:"music/suteki.mp3",title:"Sutekimeppou",thumbnail:"backgrounds/suteki.jpg"},{name:"music/Renai.mp3",title:"Renai Circulation", thumbnail:"backgrounds/renai.jpg"}];
let audio = new Audio(songs[index].name);


function updateSong(index){
    audio.pause();
    audio.currentTime = 0;
    audio.src =  songs[index].name
    background();
    audio.play();
    onOff = 1;
    play.src="ui/pause.png"
}

function background(){
    screen.style.backgroundImage=`url(${songs[index].thumbnail})`;
    title.innerHTML = songs[index].title;
    
    
}

function playPause(){
    background();
    if(onOff == 0){
        onOff = 1;
        audio.play();
        play.src="ui/pause.png"
    
    }else{
        play.src="ui/play.png"
        onOff = 0;
        audio.pause();
        
    }
}

function skip(){

    if(index < songs.length-1){
        index+=1;
        updateSong(index);
    }
}

function reverse(){
    if(index > 0){
        index-=1;
        updateSong(index);  
    }
    audio.currentTime=0;
}


function track(){
    seconds = Math.floor(audio.currentTime);
    minute=Math.floor((seconds/60)).toString().padStart(2,"0");
    second= (seconds%60).toString().padStart(2,"0");
    console.log(second);
    Playtime.innerHTML= `${minute}:${second}`;
    now=(audio.currentTime/audio.duration)*100;
    progress.value=now;
}

audio.addEventListener("timeupdate", track);
back.addEventListener("click", reverse);
play.addEventListener("click", playPause);
forward.addEventListener("click", skip);
audio.addEventListener('ended',skip);


