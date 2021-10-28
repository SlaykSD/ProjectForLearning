/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
let flag2 = false;
let numberOfFilms;
while (!flag2) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотели", '');
    flag2 = !isNaN(numberOfFilms);
    if (!flag2) {
        alert("Некорректный ввод, повторите еще раз");
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let flag = false;
while (!flag) {
    let name = prompt("Название фильма из последних фильмов", '');
    flag = name === '' || name.length > 50 ? false : true;
    if (!flag) {
        alert("Некорректный ввод, повторите еще раз");
    } else {
        personalMovieDB.movies[0] = name;
    }
}
if (personalMovieDB.count < 10) {
    if (personalMovieDB.count < 0) {
        alert("Произошла ошибка - вводите верно, плез");
    } else {
        alert("Просмотрено довольно мало фильмов");
    }
} else {
    if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман, детка");
    }
}
console.log(personalMovieDB);