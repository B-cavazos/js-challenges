let heroes = [
    {
      id: 1,
      name: 'Batman',
      nickname: 'Caped Crusader',
      universe: 'DC',
      power: 'Rich',
    },
    {
      id: 2,
      name: 'Wonder Woman',
      nickname: 'Amazonian Princess',
      universe: 'DC',
      power: 'Strength',
    },
    {
      id: 3,
      name: 'Wolverine',
      nickname: 'Logan',
      universe: 'Marvel',
      power: 'Super Healing',
    },
    {
      id: 4,
      name: 'Spider Man',
      nickname: 'Friendly Neighborhood Spider',
      universe: 'Marvel',
      power: 'Agility',
    },
  ];
  
  // showHeroDetails
  const showHeroDetails = event => {
    event.preventDefault();
    let heroIdFromAnchor = event.target.dataset.heroId;
    // find a hero inside heroes array
    // where hero.id matches heroId
    let foundHero = heroes.find(hero => hero.id === parseInt(heroIdFromAnchor));
    alert(`${foundHero.name}: ${foundHero.nickname}`);
  };
  
  // addNewHero
  const addNewHero = event => {
    event.preventDefault();
  
    //   grab input values and bind them to a variable
    let name = document.getElementById('heroName').value;
    let nickname = document.getElementById('heroNickname').value;
    let power = document.getElementById('heroPower').value;
    let universe = document.getElementById('heroUniverse').value;
  
    //   create a new object of our hero instance;
    let newHero = {
      id: heroes.length + 1,
      name,
      nickname,
      power,
      universe,
    };
  
    // push that new object into our array
    heroes.push(newHero);
    console.log(heroes);
    // create a new instance of a hero li into our ul container
    createListItems(newHero);
    alert(`${newHero.name} has been added to the team!`);
  };
  
  // removeHero
  const removeHero = ev => {
    ev.preventDefault();
    // grab heroId from dataset
    let heroIdFromBtn = ev.target.dataset.heroId;
    let heroItems = document.querySelectorAll('.list-group-item');
    let heroUL = document.querySelector('#hero-list');
    //   find the hero from array and remove from the array
    //   heroes = heroes.filter(hero => hero.id !== parseInt(heroIdFromBtn));
    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].id === parseInt(heroIdFromBtn)) {
        //   remove hero from array
        if (confirm(`Are you sure you want to remove ${heroes[i].name}?`)) {
          heroes.splice(i, 1);
          let currentHeroItem = heroItems[i];
          heroUL.removeChild(currentHeroItem);
          // console.log(heroes);
          // console.log(heroItems);
        }
      }
    }
  };
  
  // Grabbing hero list container
  let heroList = document.querySelector('#hero-list');
  
  const createListItems = hero => {
    // create our elements
    let listItem = document.createElement('li');
    let h3 = document.createElement('h3');
    let anchor = document.createElement('a');
    let small = document.createElement('small');
    let metaDiv = document.createElement('div');
    let removeBtn = document.createElement('button');
  
    // add attributes to elements
    listItem.className = 'list-group-item text-center';
    anchor.href = '#';
    removeBtn.className = 'btn btn-outline-danger btn-sm';
  
    // append hero name to list item
    anchor.textContent = hero.name;
    small.textContent = `${hero.power} | ${hero.universe}`;
    removeBtn.textContent = 'Remove';
  
    //   add event listeners for functionality
    anchor.addEventListener('click', showHeroDetails);
    removeBtn.addEventListener('click', removeHero);
  
    //   add dataset properties to an element
    anchor.dataset.heroId = hero.id;
    removeBtn.dataset.heroId = hero.id;
  
    // append our elements to parents
    metaDiv.appendChild(small);
    h3.appendChild(anchor);
    listItem.appendChild(h3);
    listItem.appendChild(metaDiv);
    listItem.appendChild(removeBtn);
    heroList.appendChild(listItem);
  };
  
  for (let i = 0; i < heroes.length; i++) {
    createListItems(heroes[i]);
  }
  
  let form = document.getElementById('hero-form');
  form.addEventListener('submit', addNewHero);