'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // старт приложения
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    // показать базу фильмов
    showFilmsDB: function(show) {
        return !show ? console.log(personalMovieDB) : console.log('Приватная база фильмов');
    },
    // переключение в приват или нет
    toggleVisibleMyDB: function() {
        return personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    // звание от просмотренных фильмов
    showMyLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    // добавляем просмотренные фильмы
    addVievedFilms: function() {
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
    },
    // добавляем пользовтельские жанры фильмов
    addYoursGenres: function() {
        for(let i = 1; i < 2; i++) {
            const genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();

            if(genres == '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ').sort();
            }    
        }

        personalMovieDB.genres.forEach((genre, index) => console.log(`Любимый жанр #${index + 1} - это ${genre}`));
    }
};