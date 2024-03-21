const score={
    wins:0,
    losses:0,
    ties:0
};
       
function playGame(playersChoice){
   const computerMove = selectComputerMove();
   let result='';
    if(playersChoice==='Man'){
        if(computerMove === 'Man'){
        result='No such mingo';
        }
        if(computerMove === 'Woman'){
        result='You won';
        }
        if(computerMove === 'Animal'){
        result='You lose';
        }
    }
   else if(playersChoice==='Woman'){                   
        if(computerMove ==='Man'){
            result='You won';
        }
        if(computerMove ==='Woman'){
            result='No such mingo';
        }
        if(computerMove ==='Animal'){
        result='You lose';
        }
    }

    else if(playersChoice==='Animal'){            
        if(computerMove ==='Man'){
            result='You lose';
        }
        else if(computerMove ==='Woman'){
            result='You lose';
        }
        else if(computerMove ==='Animal'){
        result='You won';
        }
    }
    
    if(result==='You won'){
        score.wins++;
    }
    else if(result==='No such mingo'){
        score.ties++;
    }
    else if(result==='You lose'){
        score.losses++;
    }
    document.querySelector('.js-result').innerHTML=`Result: ${result}`;
    document.querySelector('.js-moves').innerHTML=`You picked:<img src="images/${playersChoice}.png" class="image"> , computer picked:<img src="images/${computerMove}.png" class="image">`;
    updateScore();
}
function updateScore(){
        document.querySelector('.js-score').innerHTML=`wins:${score.wins},losses:${score.losses},
        ties:${score.ties}`;
    }

function selectComputerMove(){
const randomNumber = Math.random();
  
let computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
    computerMove='Man';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='Woman';
}
else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='Animal';
}
return computerMove;
}