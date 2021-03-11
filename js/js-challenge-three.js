// === Create a simple calculator app ===
    // 1. On your web page, add a button [x]
    // that triggers a confirm asking the user if they would like to calculate two numbers [x]
    // 2. if they confirm it should then trigger a prompt that asks if they would like to 'add', 'subtract', 'multiply' or 'divide' the two values [x]
    // then trigger prompts that asks for the number values [x]
    // And finally an alert that lets the user know the result of their values [x]
    // Create a js-challenge-three.html and js-challenge-three.js file and submit to github when you are done [x]
    // Aside: Create separate functions to run different tasks. And feel free to make your code as dynamic and efficient as you see fit []



//function to run calculator
const calculator = () =>{

//confirm calculation
    confirmStart = confirm('Would you like to calculate two numbers?');

    if (confirmStart == true){
    
//prompt one -- lets see if we can add a prompt if we cancel here --
    let arithmeticChoice = prompt('Would you like to add, subtract, multiply, or divide your two values?'); 
    // debugger
   
//prompt values and result
        switch(arithmeticChoice){
            case 'add':
                let addValueOne = parseInt(prompt('enter your first value'));
                let addValueTwo = parseInt(prompt('enter your second value'));
                let addAnswer = (addValueOne + addValueTwo);

                alert('The answer is ' + addAnswer);
                break;
            
            case 'subtract':
                let subValueOne = prompt('enter your first value');
                let subValueTwo = prompt('enter your second value');
                let subAnswer = subValueOne + subValueTwo;
        
                alert('The answer is ' + subAnswer);
                break;

            case 'multiply':
                let multValueOne = prompt('enter your first value');
                let multValueTwo = prompt('enter your second value');
                let multAnswer = multValueOne * multValueTwo;

                alert('The answer is ' + multAnswer);
                break;
            
            case 'divide':
                let divValueOne = prompt('enter your first value');
                let divValueTwo = prompt('enter your second value');
                let divAnswer = divValueOne / divValueTwo;
        
                alert('The answer is ' + divAnswer);
                break;

            default: alert('Please enter "add", "subtract", "multiply", or "divide"');
                
        }
    }else{
        alert('Okay then :(')
    }
}
