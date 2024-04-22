fetch('/leaderBoard')
  .then(response => response.json())
  .then(users => {
    
    for (let i = 0; i < users.length; i++) {
      //document.getElementById(`leaderImg${i+1}`).src = users[i].imagePath;
      document.getElementById(`leaderName${i+1}`).textContent = users[i].nickname;
      //console.log( new Date(users[i].registrationDate).toLocaleDateString());
      document.getElementById(`leaderDate${i + 1}`).textContent = new Date(users[i].registrationDate).toLocaleDateString();
      document.getElementById(`leaderResult${i+1}`).textContent = users[i].record;
      document.getElementById(`leaderVersion${i+1}`).textContent = '0.0.0';
    }
      
  })
  .catch(error => console.error('Error:', error));