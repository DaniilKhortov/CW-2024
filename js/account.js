document.getElementById("accountExit").addEventListener("click", Exit);

document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem("email") !== null) {
        console.log(sessionStorage.getItem("email"));
        console.log(sessionStorage.getItem("nickname"));
        console.log(sessionStorage.getItem("password"));
        console.log(sessionStorage.getItem("imagePath"));

        document.getElementById("no-account").style.position = "absolute";
        document.getElementById("no-account").style.visibility = "hidden";
        document.getElementById("account").style.position = "inherit";
        document.getElementById("account").style.visibility = "visible";
        document.getElementById("accountName").textContent = sessionStorage.getItem("nickname");
        document.getElementById("accountImg").src = sessionStorage.getItem("imagePath");
    } else {
        document.getElementById("no-account").style.position = "inherit";
        document.getElementById("no-account").style.visibility = "visible";
        document.getElementById("account").style.position = "absolute";
        document.getElementById("account").style.visibility = "hidden"; 
    }


});

function Exit() {
    if (confirm("Do you confirm log out?") == true) {
        sessionStorage.clear();
        location.reload();
        window.location.replace("index.html");
    } 

}