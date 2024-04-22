let currentPage = 0;
const gamesPerPage = 5;

function fetchGames() {
  fetch(`/userGames/${sessionStorage.getItem("nickname")}`)
    .then(response => response.json())
    .then(games => {
      for (let i = 0; i < gamesPerPage; i++) {
        const game = games[i + currentPage * gamesPerPage];
        if (game) {
          //console.log(`Game ${i + 1}:`, game);
          document.getElementById(`matchName${i+1}`).textContent = 'Гра '+(games.length-(i + currentPage * gamesPerPage));  
          document.getElementById(`date${i + 1}`).textContent = new Date(game.date).toLocaleDateString();
          document.getElementById(`result${i + 1}`).textContent = game.score;
          document.getElementById(`version${i+1}`).textContent = '0.0.4a';
        } else {
          document.getElementById(`matchName${i+1}`).textContent = 'Гра Ендера';  
          document.getElementById(`date${i + 1}`).textContent = '';
          document.getElementById(`result${i + 1}`).textContent = '';
          document.getElementById(`version${i+1}`).textContent = '';
        }
      }
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('btn-back').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    fetchGames();
  }
});

document.getElementById('btn-forw').addEventListener('click', () => {
  currentPage++;
  fetchGames();
});
fetchGames();