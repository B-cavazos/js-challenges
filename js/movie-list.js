
 /// SUCCESSFUL WAY ///


 /* 1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)*/

 let movies = [
    { 
        title: 'Black Dynamite', 
        year: '2009', 
        genre: 'action / comedy', 
        description: 'Black Dynamite is the greatest African-American action star of the 1970s. When his only brother is killed by The Man, it\'s up to him to find justice.', imdbRating: 7.4,
    },
    { 
        title: 'Zoolander', 
        year: '2001', 
        genre: 'comedy', 
        description: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.', 
        imdbRating: 6.5,
    },
    {
         title: 'Akira', 
         year: '1988', 
         genre: 'animation / action / sci-fi', 
         description: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.', 
         imdbRating: 8,
    },
    { 
        title: 'Grave of the Fireflies', 
        year: '1988', 
        genre: 'animation /drama / war', 
        description: 'A young boy and his little sister struggle to survive in Japan during World War II.', 
        imdbRating: 8.5,
    },
    {
        title: 'Midsommar', 
        year: '2019', 
        genre: 'drama / horror / mystery', 
        description: 'A couple travels to Scandinavia to visit a rural hometown\'s fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.', 
        imdbRating: 7.1,
    },
];

/* b. Create a function that when called loops through your array and console.logs
the details for each of your movies */

const movieDetails = () => {
    movies.forEach((movie => {
        console.log(movie);
    }));
};

movieDetails();


/* c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles */

const titleDetails = (movieTitle) => {

    let founMovie = movies.find((movie) => {
        return movie.title === movieTitle;
    });
    console.log(founMovie);
};

titleDetails('Akira');




/* MY ATTEMPT - I misinterpreted 'movie details' to mean 'movie descreiption' 

Daily Coding Challenge: Movie List Challenge

1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)*/

let favoriteMovies = [
    { title: 'Black Dynamite', year: '2009', genre: 'action / comedy', description: 'Black Dynamite is the greatest African-American action star of the 1970s. When his only brother is killed by The Man, it\'s up to him to find justice.', imdbRating: '7.4'},
    { title: 'Zoolander', year: '2001', genre: 'comedy', description: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.', imdbRating: '6.5'},
    { title: 'Akira', year: '1988', genre: 'animation / action / sci-fi', description: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.', imdbRating: '8'},
    { title: 'Grave of the Fireflies', year: '1988', genre: 'animation /drama / war', description: 'A young boy and his little sister struggle to survive in Japan during World War II.', imdbRating: '8.5'},
    { title: 'Midsommar', year: '2019', genre: 'drama / horror / mystery', description: 'A couple travels to Scandinavia to visit a rural hometown\'s fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.', imdbRating: '7.1'},
];


/* b. Create a function that when called loops through your array and console.logs
the details for each of your movies */

favoriteMovies.forEach(movie =>{
    console.log( 'my attempt: ' , movie);
});


/* c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles */

//pulls description
const movieDescription = favoriteMovies.filter((movie) => { 
    console.log(movie.description);
});


//pulls title
const movieTitle = favoriteMovies.filter((movie) => { 
    console.log(movie.title);
});

//pulls title, chains description
const TitlesDescription = favoriteMovies.filter((movie) => { 
    console.log(movie.title);
}).map((titleDescription) => {
    console.log(titleDescription.description);
});

const movieDescriptionSearch = (movieTitle) =>{
    //filter by title
    movieTitle = favoriteMovies.filter((movie) => { 
        return(movie.title);
    })
    .map(movieDescriptionSearch =>{
        return movieDescriptionSearch.description;
    });

    console.log(movieTitle);
};
 movieDescriptionSearch();
