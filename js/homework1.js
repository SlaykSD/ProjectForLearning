const numberOfFilms = prompt("Сколько фильмов вы уже посмотели", +'');

 let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних фильмов?", ''),
      b = prompt("На сколько оцените его?", +''), 
      c = prompt("еще Один из последних фильмов?", ''),
      d = prompt("На сколько оцените его?", +'');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;