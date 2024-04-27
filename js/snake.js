document.getElementById("instructionBtn").addEventListener("click", InstructionPop);
document.getElementById("crossBtnSnake").addEventListener("click", InstructionUnPop);
document.getElementById("button-custom").addEventListener("click", CustomPop);

function InstructionPop() {
    document.getElementById("instructionText").style.visibility = "visible";
}
function InstructionUnPop() {
    document.getElementById("instructionText").style.visibility = "hidden";
}

function CustomPop() {
    document.getElementById("customWindow").style.visibility = "visible";

    document.getElementById("crossBtnSnake2").addEventListener("click", CustomUnPop);
}
function CustomUnPop() {
    document.getElementById("customWindow").style.visibility = "hidden";
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






