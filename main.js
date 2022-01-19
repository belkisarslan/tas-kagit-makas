const buttons = document.querySelectorAll('.button');
const computer = document.querySelector('.computer');
const output = document.querySelector('.output');

const combinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

const keys = Object.keys(combinations);
const waitTime = 50;
const scrambleCount =20;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const calculateWinner = (playerPick, computerPick) => {
    if(combinations[playerPick] === computerPick) {
       output.innerHTML = 'Kazandınız!'
    }else if(playerPick === computerPick) {
       output.innerHTML = 'Berabere :)'
    }else {
       output.innerHTML = 'Tüh Kaybettiniz!'
    }
}

const compMove = async playerPick => {
    let computerPick = null;

    for(let i = 0; i < scrambleCount; i++){
        await wait(waitTime);
        computerPick = keys[Math.floor(Math.random() * keys.length)];
        computer.src = `${computerPick}.jpg`;
    }
   
    calculateWinner(playerPick, computerPick)
}

const handleClick = e => {
    buttons.forEach(button => button.classList ='button');
    e.target.classList = 'button selected';
    const playerPick = e.target.dataset.type;
    compMove(playerPick);
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});