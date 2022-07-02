const team1Button = document.querySelector('#team1Button');
const team2Button = document.querySelector('#team2Button');
const resetButton = document.querySelector('#reset');
const team1Display = document.querySelector('#team1Display');
const team2Display = document.querySelector('#team2Display');
const winningScoreSelect = document.querySelector('#playto');


let team1Score = 0;
let team2Score = 0;
let winningScore = 5;
let isGameover = false;

team1Button.addEventListener('click', function () {
    if (!isGameover) {   // if not game over
        team1Score += 1; // every click increments one
        if (team1Score === winningScore) {
            isGameover = true;
            team1Display.classList.add('has-text-success');
            team2Display.classList.add('has-text-danger');
            team1Button.disabled = true;
            team2Button.disabled = true;
        }
        team1Display.textContent = team1Score;
    }
})

team2Button.addEventListener('click', function () {
    if (!isGameover) {
        team2Score += 1; // every click increments one
        if (team2Score === winningScore) {
            isGameover = true;
            team2Display.classList.add('has-text-success');
            team1Display.classList.add('has-text-danger');
            team2Button.disabled = true;
            team1Button.disabled = true;
        }
        team2Display.textContent = team2Score;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameover = false;
    team1Score = 0;
    team2Score = 0;
    team1Display.textContent = 0;
    team2Display.textContent = 0;
    team1Display.classList.remove('has-text-success', 'has-text-danger');
    team2Display.classList.remove('has-text-success', 'has-text-danger');
    team1Button.disabled = false;
    team2Button.disabled = false;
}