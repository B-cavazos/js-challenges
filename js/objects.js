//+++++  OBECTS  +++++// 
//In JavaScript, an object is an unordered collection of key-value pairs.

let firstObject = new Object(); // Calling an object
console.log(firstObject);

let person = {
   name: 'Brittney', // KEY-VALUE PAIRING: (AKA property) will have variable name (KEY) and a value for the key // key: value
   hobby: 'Rhythm games', 
   age: 30,
   isAwesome: true,
   favoriteFruits: ['strawberries', 'apples', 'grapes'],
   pet:{            //can store object in object
       type: 'cat',
       name: 'Otto',
       age: '7',
   }
};

console.log(person);

//ACCESSING INFO IN OBJECTS//

console.log(person.hobby); // DOT-NOTATION to access the propery within tthe object
console.log(person.isAwesome);
console.log(person.favoriteFruits);
//or
console.log(person['name']) // can use BRACKET-NOTATION with string value of property
console.log(person['favoriteFruits']);

console.log(person.pet); // access object within object
console.log(person.pet.name); // access property of object in object

delete person.hobby; // deleting a property
console.log(person);

console.log('name' in person); // checking to see if a property is inside an object
console.log(person);


//OBJECTS IN LOOPS 

for (let key in person){ 
    console.log('this key name is: ', key); // render the key
    console.log('this key value is: ', person[key]); // render the value
}

// alert(person.name); // Can alert properties within an object, not entire object


//ARRAYS AND OBJECTS

let animals = [
    {
        type: 'cat',
        name: 'Otto',
        isEvil: true,
    },
    {
        type: 'cat',
        name: 'Gumball',
        isEvil: false,
    },
    {
        type: 'dog',
        name: 'Pix',
        isEvil: false,
    },
]

//create a for loop that iterates through the animals array
// and console logs each animal name

    // my way: incorrect becuase it logs the all keys and values, not just name
for (let key in animals){
    console.log(animals[key]);
} 

    //Merhawit's way:  correct!
for (let key in animals){
    console.log('!!!!!! ',animals[key].name); //dot-notation at the end of bracket-notation to target the name property
}

    //Alex's way
for (let i = 0; i < animals.length; i++){
    console.log('+++++', animals[i].name);
}


// HIGHER ORDER ARRAY METHODS

    //array .forEach() METHOD
animals.forEach(function (p) {     //we pass a function into the forEach method, function needs no name but needs FUNCTION SYNTAX and PERAMETER, p represents an instance
    console.log('my animal ', p['name']);  //forEach will loop through the array
});

    //array .map() METHOD
    //allows to loop through existing arrays and return a new array
let animalTypes = animals.map((animal) => {    //here we are calling the function with ARROW SYNTAX (preffered bc React)
    console.log('inside the map function', animal);
    return animal.type      //will return just the type property and put that into the new Array thats being created
});

console.log('Animal Types: ', animalTypes);

//array .filter() METHOD
let evilAnimals = animals.filter((animal) => {
    //check if object.isEvil property is true (!== works too)
    //if it is, return that animal
    return animal.isEvil === true; //passes whole objects,* 
});

console.log('These are the evil animals: ', evilAnimals);



//CHAINING 

let evilAnimalNames = animals.filter((animals) => {
    return animals.isEvil === true; //returns new array of animals who have isEvil: true
})
.map((evilAnimal)=>{
    return evilAnimal.name; //pulls only the 'name' key from the new array
});

console.log('My evil animals are named:', evilAnimalNames);



//more notes
    // forEach() — executes a provided function once for each array element.
    // map() — creates a new array with the results of calling a provided function on every element in the calling array.