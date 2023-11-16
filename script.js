'use strict';

let secreatNumber = Math.trunc(Math.random()*20 )+1;

let score = 20;

let heighscore = 0;

document.querySelector('.check').addEventListener
('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

//   when the box is blank.
  if(!guess){
    document.querySelector('.message').textContent = '😓 IT IS BLANK';
    document.querySelector('body').style.backgroundColor = 'gray'

//  when guess is correct.  
}else if (guess===secreatNumber){
    document.querySelector('.message').textContent = '🎉 CORRECT NUMBER';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secreatNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > heighscore){
        heighscore = score;
        document.querySelector('.heighscore').textContent = heighscore;
    }
    
  }else if (guess>secreatNumber){
    if(score>0){
        document.querySelector('.message').textContent = '📉 TOO HIGH';
        score --;
     }else{
        document.querySelector('.message').textContent = '🥺 YOU LOST THE GAME';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '30rem';
     }
        document.querySelector('.score').textContent = score;

//  when guess is worng.
  }else if (guess<secreatNumber){
    if(score>0){
        document.querySelector('.message').textContent = '📉 TOO LOW';
        score --;
     }else{
        document.querySelector('.message').textContent = '🥺 YOU LOST THE GAME';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '30rem';
     }
        document.querySelector('.score').textContent = score;
  }
})

document.querySelector('.again').addEventListener
('click', function (){
    score = 20; 
    secreatNumber = Math.trunc(Math.random()*20 )+1;
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 'score';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

});
