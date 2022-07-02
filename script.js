const team1 = {
    score: 0,
    button: document.querySelector('#team1Button'),
    display: document.querySelector('#team1Display'),
}

const team2 = {
    score: 0,
    button: document.querySelector('#team2Button'),
    display: document.querySelector('#team2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 5;
let isGameover = false;

function updateScores(player, opponent) {
    if (!isGameover) {   // if not game over
        player.score += 1; // every click increments one
        if (player.score === winningScore && player.score > opponent.score + 1) {
            isGameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        } else if (player.score === winningScore - 1 && player.score === opponent.score) {
            winningScore++;
        }
    }
    player.display.textContent = player.score;

}

team1.button.addEventListener('click', function () {
    updateScores(team1, team2)
})

team2.button.addEventListener('click', function () {
    updateScores(team2, team1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameover = false;
    for (let team of [team1, team2]) {
        team.score = 0;
        team.display.textContent = 0;
        team.display.classList.remove('has-text-success', 'has-text-danger');
        team.button.disabled = false;
    }
}