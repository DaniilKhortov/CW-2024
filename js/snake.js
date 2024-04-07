document.getElementById("instructionBtn").addEventListener("click", InstructionPop);
document.getElementById("crossBtnSnake").addEventListener("click", InstructionUnPop);
function InstructionPop() {
    document.getElementById("instructionText").style.visibility = "visible";
}
function InstructionUnPop() {
    document.getElementById("instructionText").style.visibility = "hidden";
}