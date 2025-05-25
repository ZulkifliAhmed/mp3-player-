let musicImage = document.querySelector(".images img"),
  songName = document.querySelector(".mp3-name .song"),
  singerName = document.querySelector(".mp3-name .singer"),
  audioSrc = document.querySelector(".mp3-src");

  let musicIndex = 0;
  let isPlaying = false;


  window.onload = function(){
    lodeMusic(musicIndex);
  }

  function lodeMusic(index){
    musicImage.src = allAudio[index].img;
    songName.innerHTML = allAudio[index].name;
    singerName.innerHTML = allAudio[index].artist;
    audioSrc.src = allAudio[index].src;
  }

  function playMusic(){
    isPlaying = true;
    audioSrc.play()
  }