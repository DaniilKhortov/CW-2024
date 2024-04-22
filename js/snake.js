document.getElementById("instructionBtn").addEventListener("click", InstructionPop);
document.getElementById("crossBtnSnake").addEventListener("click", InstructionUnPop);
function InstructionPop() {
    document.getElementById("instructionText").style.visibility = "visible";
}
function InstructionUnPop() {
    document.getElementById("instructionText").style.visibility = "hidden";
}





function outlineOn(element) {

    element.querySelector('.account-btn-start img').src = './img/play-gray.png';
}

function touchOn(element) {
    element.querySelector('.account-btn-start img').src = './img/play-gray.png';
}

function outlineOff(element) {
    element.querySelector('.account-btn-start img').src = './img/play.png';

}

function touchOff(element) {
    element.querySelector('.account-btn-start img').src = './img/play.png';
}





