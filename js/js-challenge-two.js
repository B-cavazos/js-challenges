//Exercise One

for (let i=0; i<=100; i++) {
    if (i % 2 === 0) { 

    }
    else {
        console.log(i);
    }}




//Exercise Two

let firstName = 'Brittney';
let lastName = 'Cavazos';

function welcomeMessage(p1, p2){
    alert('Welcome, ' + p1 + ' ' + p2 + '!');
}

welcomeMessage(firstName, lastName);




//Exercise Three - Verify a User's Age//
    //--ccreate a function that prompts a user to enter their age - Arrow syntax
    //--if user is <13, alert they can enter
    //--if >13, alert they can not enter

const ageAlert = () => {
    let age = prompt('How old are you?');

    if (age > 13) { 
        alert('Welcome to the site!'); 
    }else if (age <= 13){
        alert('Get out of here, kid!');
    }else{
        alert('That isnt a number!');
    }};

ageAlert();




//Exercise Four - Temperature in Fahrenheit//
    //Create a function that converts a number from Celsius to Fahrenheit
    //The C -> F formula is: number * 1.8 + 32
    //The number variable should be passed in to the function as a parameter
    //Console.log the result

    /*     CODE FOR EXERCISE FOUR  */
const toFahrenheitA = (celsiusA) =>{
        fahrenheitA = (celsiusA * 1.8) + 32;

        console.log(fahrenheitA + ' degrees');
    }
    
toFahrenheitA(3);


//Exercise Four.b
    // allow user to enter a number to be converted
    // give user-friendly answer. 

const toFahrenheit = (celsius) =>{
    celsius = prompt('Enter degrees in Celsius:');
    fahrenheit = (celsius * 1.8) + 32;

    alert(celsius + ' degrees Celsius converts to ' + fahrenheit + ' degrees Fahrenheit');
    }
    



//Exercise Five - Guess the number between 1 and 10//
    //Add a button to your page that when clicked calls a function [x]
    //The function should prompt the user for a number between 1 and 10 [x]
    //Initialize the function with an answerNumber variable inside the function [x]
    //If the user passed number is correct, alert the user they are correct [x]
    //Else let the user know they are wrong and to try again [x]

const guessGame = () => {
    let myNumber = 7;
    let guessNumber = prompt('Pick a number, 1- 10');

    if (guessNumber == myNumber) { //using == is not best practice, though it works. 
        alert('You got it!'); 
    }else{
        alert('Guess again!');
    }};