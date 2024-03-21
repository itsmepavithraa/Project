const generateButton = document.getElementById('button');
var displayBox = document.getElementById('box');

generateButton.addEventListener('click', onClick);

function onClick(){
    let otp = '';
    for(let i = 0; i < 6; i++) {
        otp = otp + Math.floor(Math.random() * 10);
    }
    displayBox.innerHTML = otp;
    displayBox.innerHTML = '<strong>' + otp + '</strong>';
}