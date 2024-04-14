let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo(){

    videoPlayer.style.display="none";
}
function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display="block";
}
