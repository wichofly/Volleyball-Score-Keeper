const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    name: document.querySelector("#inputName1"),
  };
  
  const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    name: document.querySelector("#inputName2"),
  };
  
  const name1Button = document.querySelector("#name1");
  const name2Button = document.querySelector("#name2");
  
  name1Button.addEventListener("click", function (e) {
    p1.button.textContent = `+1 ${p1.name.value}`;
    // p1.name.value = "";
  });
  
  name2Button.addEventListener("click", function (e) {
    p2.button.textContent = `+1 ${p2.name.value}`;
    // p2.name.value = "";
  });
  
  const resetButton = document.querySelector("#reset");
  const winningScoreSelect = document.querySelector("#playTo");
  
  let winningScore = 3;
  let isGameOver = false;
  let numMatches = 0;
  
  function updateScore(player, opponent) {
    if (!isGameOver) {
      player.score += 1;
      if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add("has-text-primary");
        opponent.display.classList.add("has-text-danger");
        player.button.disabled = true;
        opponent.button.disabled = true;
  
        // crare la tabella
        numMatches += 1;
        const table = document.querySelector("#table");
        const row = document.createElement("tr");
        const numMatchesT = document.createElement("td");
        const winnerT = document.createElement("td");
        const scoreT = document.createElement("td");
        table.append(row);
        row.append(numMatchesT, winnerT, scoreT);
        numMatchesT.append(numMatches);
        if (p1.name.value === "" && p2.name.value === "") {
          if (p1.score === winningScore) {
            winnerT.append("giocatore 1");
          } else {
            winnerT.append("giocatore 2");
          }
        } else {
          winnerT.append(player.name.value);
        }
  
        if (p1.score === winningScore) {
          scoreT.append(`${player.score} - ${opponent.score}`);
        } else {
          scoreT.append(`${opponent.score} - ${player.score}`);
        } 
      } if(player.score === opponent.score && player.score === winningScore-1){
            winningScore ++;
        }
      }
      player.display.textContent = player.score;
  
  }
  
  p1.button.addEventListener("click", function (e) {
    updateScore(p1, p2);
  });
  
  p2.button.addEventListener("click", function (e) {
    updateScore(p2, p1);
  });
  
  winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
  });
  
  resetButton.addEventListener("click", reset);
  
  function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove("has-text-primary", "has-text-danger");
      p.button.disabled = false;
    }
  }
  