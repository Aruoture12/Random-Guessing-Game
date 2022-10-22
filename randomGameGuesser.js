var readline = require('readline');

var randomNumber = Math.round(Math.random() * 2);


var username = "";
var points = 0;
var trials = 5;

var terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//terminal.setPrompt('Please enter your username: ')

terminal.prompt();

terminal.on('line', (result) => {
    username = result;
});


terminal.setPrompt('Please enter a number between 1 and 2: ')

terminal.prompt();

terminal.on('line', function(answer) {
    var answerNum = parseInt(answer);

    if (answerNum > randomNumber) {

        console.log(`Hi, the selected number is too high!`);

    } else if (answerNum < randomNumber) {
        console.log(`Hi, the selected number is too low!`);

    } else if (answerNum === randomNumber) {
        console.log(`Hi! Congratulations, you got it right.`);
        points++;
        randomNumber = Math.round(Math.random() * 2);
        funcToCallAgain();
    } else {
        console.log("That wasn't a number I recognise");
        console.log('You have ' + trials + ' trials');
    }

    trials--;
    if (trials == 0) {
        console.log('G A M E  O V E R ! ! !');
        process.exit(0);
    }

    terminal.prompt();
});

terminal.on('close', function() {
    //console.log('C H I C K E N :P')
    process.exit(1);
});


const funcToCallAgain = () => {

    terminal.setPrompt('Please enter a number between 1 and 2: ')

    terminal.prompt();
    terminal.on('line', function(answer) {
        var answerNum = parseInt(answer);

        if (answerNum > randomNumber) {

            console.log(`Hi, the selected number is too high!`);
        } else if (answerNum < randomNumber) {
            console.log(`Hi, the selected number is too low!`);

        } else if (answerNum === randomNumber) {
            console.log(`Hi! Congratulations, you got it right.`);
            points++;
            console.log(`Your total is ${points}`);
            randomNumber = Math.round(Math.random() * 2);
        } else {
            console.log("That wasn't a number I recognise");
            console.log('You have ' + trials + ' trials');
        }

        trials--;
        if (trials == 0) {
            console.log('G A M E  O V E R ! ! !');
            process.exit(0);
        }

        terminal.prompt();
    });
}