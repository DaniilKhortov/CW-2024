/*Connection with HTML*/
document.getElementById("imageChanger").addEventListener("click", ImageChange);
document.getElementById("regBtn").addEventListener("click", Register);
document.getElementById("icon1").addEventListener("click", function () {
    changeIcon("./img/icon1.png");
});
document.getElementById("icon2").addEventListener("click", function () {
    changeIcon("./img/icon2.png");
});
document.getElementById("icon3").addEventListener("click", function () {
    changeIcon("./img/icon3.png");
});
document.getElementById("icon4").addEventListener("click", function () {
    changeIcon("./img/icon4.png");
});
//document.getElementById("icon5").addEventListener("click", function () {
//    changeIcon("./img/icon5.png");
//});
document.getElementById("icon6").addEventListener("click", function () {
    changeIcon("./img/icon6.png");
});
document.getElementById("icon7").addEventListener("click", function () {
    changeIcon("./img/icon7.png");
});
document.getElementById("icon8").addEventListener("click", function () {
    changeIcon("./img/icon8.png");
});
document.getElementById("icon9").addEventListener("click", function () {
    changeIcon("./img/icon9.png");
});
document.getElementById("icon10").addEventListener("click", function () {
    changeIcon("./img/icon10.png");
});
document.getElementById("icon11").addEventListener("click", function () {
    changeIcon("./img/icon11.png");
});
document.getElementById("icon12").addEventListener("click", function () {
    changeIcon("./img/icon12.png");
});

/*Function to hide icon before choosing new*/
function ImageChange() {

    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "visible";
    registerImgSection.style.position = "inherit";
    document.getElementById("imageChanger").style.position = "absolute";
    document.getElementById("imageChanger").style.visibility = "hidden";

}

/*Function to change the icon */
function changeIcon(iconPath) {
    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "hidden";
    registerImgSection.style.position = "absolute";
    document.getElementById("imageChanger").style.position = "inherit";
    document.getElementById("imageChanger").style.visibility = "visible";
    document.getElementById("currentIcon").src = iconPath;
}

/*Function to validate e-mail via checking it grammar. Also it only supports e-mails like @gmail.com, @yahoo.com, @outlook.com). It returns entered value in lowerCase*/
function validateRealisticEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(gmail\.com|yahoo\.com|outlook\.com|ukr\.net|ua\.fm)$/;
    return re.test(String(email).toLowerCase());
}

/*Function to validate password via checking it grammar.*/
function validatePassword(password) {

    const isLongEnough = password.length >= 8;

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /\d/.test(password);

    return isLongEnough && hasUpperCase && hasLowerCase && hasSpecialCharacter && hasNumber;
}

/*Function to validate all entered data via calling support-function. Also, it adds aditional data and saves to server.*/
function Register() {
    let email = document.getElementById('email').value;
    let nickname = document.getElementById('nickname').value;
    let password = document.getElementById('psw').value;
    let imagePath = document.getElementById('currentIcon').src;
    
    imagePath = imagePath.substring(imagePath.lastIndexOf('/')-3);
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let confirmPassword = document.getElementById('psw2').value;

    /*Checking input data.*/
    if (password !== confirmPassword) {
        alert("Registration Error: Passwords are different!");
        return;
    }

    if (validateRealisticEmail(email)===false) {
        alert("Registration Error: Email address is invalid!");
        return;
    }
    if (nickname>=13) {
        alert("Registration Error: Nickname must be shorter than 12 synmols!");
        return;
    }
    if (validatePassword(password) === false) {
        alert("Password must contain one uppercase letter, one undercase letter, one digit and one spacial symbol. The minimal length of password is 8 symbols!");
        return;
    }
    /*Creating data fields for user.*/
    const player = {
        email: email,
        nickname: nickname,
        password: password,
        record: 0,
        imagePath: imagePath,
        registrationDate: new Date()
    };

    /*Saving data.*/
    fetch('/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(player)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error) });
        }
        return response.json();
    })
    .then(data => {
        if (data.user) {
            //sessionStorage.setItem("token", data.token); 
            sessionStorage.setItem("email", data.user.email);
            sessionStorage.setItem("nickname", data.user.nickname);
            sessionStorage.setItem("imagePath",  data.user.imagePath);
            alert("Registration completed!");
            window.location.replace("index.html");
        } else {
            console.error('User data is missing in the response');
        }
    })
    .catch(error => {
        alert(`Помилка: ${error.message}`);
        console.error('Error:', error);
    });
}