//VARIABLES
//Variable for roll dice button location
const rollDiceButton = document.querySelector('.btn');
const flipCard = document.querySelector('.flip-card-inner');
const flipCardA = document.querySelector('.flip-card-front');
const flipCardB = document.querySelector('.flip-card-back');

//FUNCTIONS
//Roll dice to a random number
function rollDice(min, max) {
    min = Math.ceil(1); //Math.ciel() rounds up to whole integer
    max = Math.floor(7);//Math.floor() rounds down to whole integer

    console.log (Math.floor(Math.random() * (max - min)) + min); 
};

function rollDice2(min, max) {
    min = Math.ceil(1); //Math.ciel() rounds up to whole integer
    max = Math.floor(7);//Math.floor() rounds down to whole integer

    console.log (Math.floor(Math.random() * (max - min)) + min); 
};

//Flip the card when it is clicked using toggle
function flipCards (){
    this.classList.toggle('flip-card-inner-transform');
}



//setInterval(rollDice, 1000);

//EVENT LISTENERS
//When .btn is clicked, init the function
rollDiceButton.addEventListener('click', rollDice)
rollDiceButton.addEventListener('click', rollDice2)

flipCard.addEventListener('click', flipCards)


