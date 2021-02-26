//ARRAY NOTES

//STRINGS
// Strings Properties and Methods
let firstString = 'Hello World';
firstString = 'Hello universe!';
let wordString = 'meow, oomf, yikes, woah'

console.log(firstString); //logs into console
console.log(firstString.length) // logs length of the string (starts at 0)

//Methods are specific to a DATA TYPE
console.log(firstString.indexOf('o')); // logs postion of the value in (). starts at 0. (ex: 'o' will log 4)

console.log(firstString.trim); // .trim removes empty space from string
console.log(firstString.toUpperCase); // Will capitalize every letter in the string
console.log(firstString.toLowerCase); // Will lowercase every letter in the string


//THE SUBSTRING() METHOD - cuts out piece of a string (start, end) index starts at 0
console.log(firstString.substring(0,5)) // ex: will return 'Hello'
console.log(firstString.substring(7,13)); // ex: will return 'universe'

//THE SPLIT METHOD - Split a string into substrings using the specified separator and return them as an array.
console.log(firstString.split(' ')); //ex: splits the string at the ' ' in 'Hello universe' into two substrings - now an array
console.log(wordString.split(',')); //ex: splits the string at the ',' returns 4 arrays

console.log(wordString.toUpperCase().split(',')); //ex: splits the string at the ',' returns 4 arrays in all caps

//ARRAYS
// An ARRAY is Data structure that allows you to store ordered values. a box (array) of boxes (the collection of values)
let firstArray = new Array(1,2,3,4) // this function creates arrays
console.log('first array ' + firstArray);
let coolerArray = [10, 20, 30, 40];
console.log('cooler array: ', coolerArray);

let fruits  = ['Apples', 'Oranges', 'Plums', 'Jackfruit']; // Builds an array
console.log(fruits);
console.log(fruits[1]); // logs array item 1 [1]
console.log('I like ' + fruits[1] + ' and ' + fruits[2]); // logs concat string that incudes array item 1 [1] and array item 2 [2]

    //add an item to an array
console.log(fruits.push('Mangoes')) //.push adds a NEW value(s) to an array
console.log(fruits); // the new value(s) goes at the END

fruits.unshift('Tacos');
console.log(fruits); // the new value(s) goes to the FRONT

    //remove an item from an array
fruits.pop(); // removes the LAST item
console.log(fruits);

console.log('How many items are in my fruits array? ', fruits.length); // note the COMMA, don't concat the array

//LOOPING ARRAYS
let emptyArray = [];

for(let i = 0; i <= 3; i++){
    console.log(fruits[i]); //each iteration will log the index the same as i, will loop until i = 3
}

fruits.push('Watermelons');

for(let i = 0; i < fruits.length; i++){     //fruits.length retuns a number value // not <= becuase array index starts at 0
    console.log(fruits[i]);     //each iteration will log the index the same as i, will loop until length of the fruits array
}

//CHALLENGE
//Create an array of your top 5 movies
//Create a LOOP that console.logs each of those movies
// use toUpperCase() to console.log all movies in al caps

let movies = ['Black Dynamite', 'Zoolander', 'Akira', 'Grave of the Fireflies', 'Midsommar'];

for(let i = 0; i < movies.length; i++){     
    console.log(movies[i].toUpperCase());   
}