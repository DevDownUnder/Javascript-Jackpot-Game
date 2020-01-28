

//Roll dice to a random number
function rollDice(min, max) {
    min = Math.ceil(1); //Math.ciel() rounds up to whole integer
    max = Math.floor(7);//Math.floor() rounds down to whole integer

    console.log (Math.floor(Math.random() * (max - min)) + min); 
};

//setInterval(rollDice, 1000);

