const team1Button = document.querySelector('#team1Button');
const team2Button = document.querySelector('#team2Button');
const team1Display = document.querySelector('#team1Display');
const team2Display = document.querySelector('#team2Display');


let team1Score = 0;
let winningScore = 10;

team1Button.addEventListener('click', function () {
    team1Score += 1; // every click increments one
    team1Display.textContent = team1Score;

})