document.getElementById("statName").textContent = sessionStorage.getItem("nickname");
document.getElementById("statEmail").textContent = sessionStorage.getItem("email");
document.getElementById("statRecord").textContent = sessionStorage.getItem("record");
document.getElementById("statReg").textContent = new Date(sessionStorage.getItem("registrationDate")).toLocaleDateString();



document.getElementById("instructionBtn").addEventListener("click", InstructionPop);
document.getElementById("instructionImg").addEventListener("click", InstructionPop);


function InstructionPop() {
    document.getElementById("crossBtnSnake").addEventListener("click", InstructionUnPop);
    document.getElementById("instructionText").style.display = "block";
}
function InstructionUnPop() {
    document.getElementById("instructionText").style.display = "none";
}
let apple = 0;

fetch(`/userGames/${sessionStorage.getItem("nickname")}`)
.then(response => response.json())
.then(games => {
    document.getElementById("statMatch").textContent = games.length;
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        apple += game.score;
    }
    document.getElementById("statApple").textContent = apple;
})
.catch(error => console.error('Error:', error));


