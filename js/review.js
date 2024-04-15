document.getElementById("revBtn").addEventListener("click", Register);
function Register() {
    let email = document.getElementById('email').value;


    function validateRealisticEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(gmail\.com|yahoo\.com|outlook\.com)$/;
        return re.test(String(email).toLowerCase());
    }

    if (validateRealisticEmail(email) === false) {
        alert("Error: Email address is invalid!");
        return;
    }

    alert("Feedback submited!");
    window.location.replace("index.html");

}