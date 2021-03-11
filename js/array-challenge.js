//============== Morning Challenge: Array Methods ===============

let items = [
  { name: 'Huffy X27', price: 100, category: 'fitness' },
  { name: 'The Alchemist', price: 15, category: 'books' },
  { name: 'Snuggy', price: 10, category: 'home' },
  { name: 'Macbook Pro', price: 1500, category: 'technology' },
  { name: 'Peloton', price: 2000, category: 'fitness' },
  { name: 'iPad Pro', price: 800, category: 'technology' },
  { name: 'Ember Coffee Mug', price: 80, category: 'home' },
  { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];


//- Loop through the items, console.log the price with a concatenated string that let's the user know the total price
for (i = 0; i < items.length; i++){
  console.log('The cost of item is $' + items[i].price);
}


//- Loop through the items with .forEach method, console.log the price with a concatenated string that let's the user know the total price
items.forEach((item) => {
  console.log('The total for this item is $' + item.price);
});


//- Create a new array using the map method, that returns all the names of each item
let itemNames = items.map(item =>{
  return item.name;
});

console.log(itemNames);


//- Create a new array using the filter method that returns all the items that are less than 100
 let itemsLessThanOneHundred = items.filter((cheap) =>{
   return cheap.price < 100;
 });

 console.log(itemsLessThanOneHundred);


//- Using the find method loop through the array and return the laptop item setting it to a variable
const foundItem = items.find(item =>{
  return item.name === 'Macbook Pro';
});

console.log(foundItem);


//- Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items
const expensiveItems = items.filter(item => {
  return item.price > 100;
})
.map(expensiveItem =>{
  return expensiveItem.name;
});

console.log(expensiveItems);