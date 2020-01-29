
//Variable for roll dice button location
const rollDiceButton = document.querySelector('.btn');

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


//setInterval(rollDice, 1000);

//When .btn is clicked, init the function
rollDiceButton.addEventListener('click', rollDice)
rollDiceButton.addEventListener('click', rollDice2)
