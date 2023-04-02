const p1ScoreDisplay = document.getElementById('p1score');
const p2ScoreDisplay = document.getElementById('p2score');

const wScoreDisplay = document.querySelector('p span');

const inputScore = document.getElementById('inputScore');

const player1Btn = document.getElementById('p1Btn');
const player2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

function reset()
{
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0; 
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled'); 
    p1ScoreDisplay.classList.remove('winner');
    p2ScoreDisplay.classList.remove('winner');
}

function winner(oldScore, winingScore){
    if(oldScore === winingScore){
        gameOver = true;
        if(p1Score == winingScore){
            p1ScoreDisplay.classList.add('winner');
        }else{
            p2ScoreDisplay.classList.add('winner');
        }
        player1Btn.setAttribute('disabled', 'disabled');
        player2Btn.setAttribute('disabled', 'disabled');
    //     player1Btn.classList.add('disabled')
    //     player2Btn.classList.add('disabled');
    }
}

player1Btn.addEventListener('click', ()=>{
    if(!gameOver){
        p1Score++;
        winner(p1Score, winingScore);
    }
    
    p1ScoreDisplay.textContent = p1Score;
})
player2Btn.addEventListener('click', ()=>{
    if(!gameOver){
        p2Score++;
        winner(p2Score, winingScore);
    }
    p2ScoreDisplay.textContent = p2Score;
})

inputScore.addEventListener('change', () =>{
    winingScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    resetBtn();
})

resetBtn.addEventListener('click', reset)