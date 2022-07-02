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
        if (player.score === winningScore) {
            isGameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

team1.button.addEventListener('click', function () {
    updateScores(team1,team2)
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
    team1.score = 0;
    team2.score= 0;
    team1.display.textContent = 0;
    team2.display.textContent = 0;
    team1.display.classList.remove('has-text-success', 'has-text-danger');
    team2.display.classList.remove('has-text-success', 'has-text-danger');
    team1.button.disabled = false;
    team2.button.disabled = false;
}