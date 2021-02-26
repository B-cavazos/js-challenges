const guessGame = () => {
    let myNumber = 7;

    for (let i = 0; i <=2; i++){
        let guessNumber = prompt('Pick a number, 1- 10');

        // debugger;

        let verified = verifyNumber(guessNumber);

        if(verified){
            alert('That is not a number!');
        }else if (guessNumber == myNumber) { //using == is not best practice, though it works. 
            alert('You got it!');
            break;
        }else{
            alert('Guess again!');
        }

        if (i === 2) alert('You have run out of guesses');
    }
};

const verifyNumber = (userGuess) =>{
     let result = isNaN(userGuess);
     return result; // return isNaN(userGuess); would send Boolean back, not literal user input. Doing this would save a line of code
};