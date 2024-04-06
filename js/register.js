document.getElementById("imageChanger").addEventListener("click", ImageChange);
document.getElementById("icon1").addEventListener("click", function () {
    changeIcon("./img/icon1.png");
});
document.getElementById("icon2").addEventListener("click", function () {
    changeIcon("./img/icon2.png");
});
document.getElementById("icon3").addEventListener("click", function () {
    changeIcon("./img/icon3.png");
});
function ImageChange() {

    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "visible";
    registerImgSection.style.position = "inherit";
    document.getElementById("imageChanger").style.position = "absolute";
    document.getElementById("imageChanger").style.visibility = "hidden";

}



function changeIcon(iconPath) {
    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "hidden";
    registerImgSection.style.position = "absolute";
    document.getElementById("imageChanger").style.position = "inherit";
    document.getElementById("imageChanger").style.visibility = "visible";
    document.getElementById("currentIcon").src = iconPath;
}
