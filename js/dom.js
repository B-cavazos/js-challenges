console.log(document); //  grabs the document's structure to console


//**** Selectors ****//
// selectors are a tool that allow us to grab data from our document
// In the form of nodes, elements, etc.


// getElementById()
    //will grab the element AND its children
let variableMainHeading = document.getElementById('main-heading');
console.log(variableMainHeading); 


// getElementsByClassName()
    //elements - plural
    //class names are string
    //grabs all elements with the class name
let variableRowClasses = document.getElementsByClassName('row');
console.log(variableRowClasses);


// getElementsByTagName()
    //refers to html tags<>
    // returns a COLLECTION of tags , similar to an array
let variableDivTags = document.getElementsByTagName('div');
console.log(variableDivTags);


// querySelector()
    // Find element based on CSS selectors
    // ** returns only the 1st instance
    //call the css selector with ., #, etc and ''

let variableDivContainer = document.querySelector('.container');
console.log(variableDivContainer);
 
let variableMainIdHeading = document.querySelector('#main-heading');
console.log(variableMainIdHeading);
 
let variableSpanTag = document.querySelector('span');
console.log(variableSpanTag);

// querySelectorAll()
    //can grab MULTIPLE instances
    //returns NODE LIST (vs Collection)

let variableAllDivTags = document.querySelectorAll('div');
console.log(variableAllDivTags);