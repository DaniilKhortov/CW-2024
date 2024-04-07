




function outlineOn(element) {
    let paragraphs = element.querySelectorAll('.bl-btn-desc p');

    paragraphs.forEach(function (paragraph) {
        paragraph.style.color = 'white';
    });

    if (element.id === 'bl-1') {
        element.querySelector('.bl-btn-icon img').src = './img/controller-white.png';
    } else if (element.id === 'bl-2') {
        element.querySelector('.bl-btn-icon img').src = './img/liderboard-white.png';
    } else if (element.id === 'bl-3') {
        element.querySelector('.bl-btn-icon img').src = './img/history-white.png';
    } else if (element.id === 'bl-4') {
        element.querySelector('.bl-btn-icon img').src = './img/update-white.png';
    } else if (element.id === 'bl-5') {
        element.querySelector('.bl-btn-icon img').src = './img/question-white.png';
    } else if (element.id === 'bl-6') {
        element.querySelector('.bl-btn-icon img').src = './img/dev-white.png';
    }



}

function outlineOff(element) {
    let paragraphs = element.querySelectorAll('.bl-btn-desc p');

    paragraphs.forEach(function (paragraph) {
        paragraph.style.color = '';
    });

    if (element.id === 'bl-1') {
        element.querySelector('.bl-btn-icon img').src = './img/controller.png';
    } else if (element.id === 'bl-2') {
        element.querySelector('.bl-btn-icon img').src = './img/liderboard.png';
    } else if (element.id === 'bl-3') {
        element.querySelector('.bl-btn-icon img').src = './img/history.png';
    } else if (element.id === 'bl-4') {
        element.querySelector('.bl-btn-icon img').src = './img/update.png';
    } else if (element.id === 'bl-5') {
        element.querySelector('.bl-btn-icon img').src = './img/question.png';
    } else if (element.id === 'bl-6') {
        element.querySelector('.bl-btn-icon img').src = './img/dev.png';
    }

}


//document.addEventListener('DOMContentLoaded', function () {
//    if (localStorage.getItem('userData')) {
//        var userData = JSON.parse(localStorage.getItem('userData'));
//        console.log('Email:', userData.email);
//        console.log('Image Path:', userData.image);
//    } else {
//        console.log('No user data found in localStorage');
//    }
//});


