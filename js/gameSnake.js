const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image(), foodImg = new Image(), foodSuper = new Image();
ground.src = "img/ground.png";
foodImg.src = "img/food3.png";
foodSuper.src = "img/foodS.png";

let box = 32, score = 0, time = 400,  game, specialFood = null;
let touchStartX = null, touchStartY = null, dir, gamePaused = false;

let food = {
  x: Math.floor((Math.random() * 17 + 1)) * box,
  y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

function spawnSpecialFood(chance) {
    let randNum = Math.floor(Math.random() * 100) + 1;

    if (randNum <= chance) {
        specialFood = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    }
}

document.addEventListener("keydown", direction);
//-------------------------------------------------------
canvas.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, false);

canvas.addEventListener('touchmove', function(e) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    let xUp = e.touches[0].clientX, yUp = e.touches[0].clientY;

    let xDiff = touchStartX - xUp, yDiff = touchStartY - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0 && dir != "right") {
            dir = "left";
        } else if (dir != "left") {
            dir = "right";
        }
    } else {
        if (yDiff > 0 && dir != "down") {
            dir = "up";
        } else if (dir != "up") {
            dir = "down";
        }
    }

    touchStartX = null;
    touchStartY = null;
}, false);
//-------------------------------------------------------

function direction(event) {
  if(event.keyCode == 37 && dir != "right"||event.keyCode == 65 && dir != "right")
    dir = "left";
  else if(event.keyCode == 38 && dir != "down"||event.keyCode == 87 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left"||event.keyCode == 68 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up"||event.keyCode == 83 && dir != "up")
    dir = "down";
  else if(event.keyCode == 80)
    togglePause();
}

function eatTail(head, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(head.x == arr[i].x && head.y == arr[i].y){
      gameOver();
    }   
  }
}

function drawGame() {
  if(gamePaused) {
    return;
  }
  if(score == 255) {
    alert("Congratulation!!!");
  }
  ctx.clearRect(0, 0, 609, 609);
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);
  if (specialFood) {
    ctx.drawImage(foodSuper, specialFood.x, specialFood.y);
  }

  for(let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (specialFood && snakeX == specialFood.x && snakeY == specialFood.y) {
    score += 5; 
    specialFood = null; 
  }
  let x = Math.random();
  if ( x < 0.8 && x > 0.76 ) {
    spawnSpecialFood(5);
  }
  if(snakeX == food.x && snakeY == food.y) {
    score++;
    timeLess();
    food = {
      x: Math.floor((Math.random() * 17 + 1)) * box,
      y: Math.floor((Math.random() * 15 + 3)) * box,
    };
  } else {
    snake.pop();
  }

  if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17){
    gameOver();
  }
    

  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  eatTail(newHead, snake);

  snake.unshift(newHead);
}

function stopScroll() {
  window.removeEventListener('touchmove', preventScroll, { passive: false });
}

function preventScroll(e) {
  e.preventDefault();
}

function togglePause() {
  gamePaused = !gamePaused;
  stopScroll();
}

function startGame() {
  window.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
  game = setInterval(drawGame, time); 
}

function starting(){
    startGame();
    document.getElementById("button-start").style.display = "none";
}

function gameOver() {
  stopScroll();
  clearInterval(game);
  document.getElementById("finalScore").innerText = "Ваш результат: " + score;
  document.getElementById("exitWindow").style.visibility = "visible";

  tempNickname = sessionStorage.getItem("nickname")
  if (tempNickname != null) {
    const gameHistory = {
      nickname: tempNickname,
      date: new Date(),
      score: score
    };
    fetch('/gameHistory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(gameHistory)
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.error('Error:', error));
    
    fetch(`/getUserRecord/${sessionStorage.getItem("nickname")}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      if (score > data.record) {
        fetch(`/updateUserRecord/${sessionStorage.getItem("nickname")}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ record: score })
        })
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => console.error('Error:', error));
      }
    })
    .catch(error => console.error('Error:', error));
    }
}

function timeLess() {
  if(time > 150){
    time = time - 10;
    clearInterval(game); 
    startGame(); 
  } 
}

document.getElementById("button-pause").addEventListener("click", togglePause);
document.getElementById("button-start").addEventListener("click", starting);

//startGame(); 
// Завершення гри
let modal = document.getElementById("exitWindow");

document.getElementById("restart").addEventListener("click", function() {
  modal.style.display = "none"; 
  location.reload();
});

document.getElementById("mainMenu").addEventListener("click", function() {
  modal.style.display = "none"; 
});




