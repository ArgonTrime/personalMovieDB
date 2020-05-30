'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// start();
// showMyLevel();
// addVievedFilms();
addYoursGenres();
showFilmsDB(personalMovieDB.privat);

// функции

// старт приложения
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// показать базу фильмов
function showFilmsDB(show) {
    return !show ? console.log(personalMovieDB) : console.log('Приватная база фильмов');
}

// звание от просмотренных фильмов
function showMyLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// добавляем просмотренные фильмы
function addVievedFilms() {
    for(let i=0; i < 2; i++) {
        const filmName = prompt('Один из последних просмотренных фильмов?', ''),
              personalRating = prompt('На сколько вы оцениваете его от 1 до 10?', '');
    
        if(filmName != null && personalRating != null &&
            filmName != '' && personalRating != '' && filmName.length < 50) {
            personalMovieDB.movies[filmName] = personalRating;
            console.log('Добавляем');
        } else {
            console.log('Вы ввели что-то не то');
            i--;
        }
    }
}

// добавляем пользовтельские жанры фильмов
function addYoursGenres() {
    for(let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(genre);
    }
}