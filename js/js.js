/**
 * @Author Whiteford, Parker (pwhiteford02@gmail.com)
 * @Author Bolinger, Parker (garbonzo3000@gmail.com)
 * @version 0.0.1
 * @summary neet coode stoof
 *@todo not quite everything
 */

"use strict";
const PROMPT = require('readline-sync');

const MIN_RATING = 1;
const MAX_RATING = 10;
let cinematographyRating, actingRating, writingRating, plotRating, movieTitle, overallRating, answer;

function main() {
    setMovieTitle();
    setCinematogRating();
    setActingRating();
    setWritingRating();
    setPlotRating();
    calcResults();
    returnQuestion();
}

main();

function setMovieTitle() {
    movieTitle = PROMPT.question(`What is the title of the movie you would like to review? `);
}

function setCinematogRating() {
    cinematographyRating = Number(PROMPT.question(`Out of 10 how many stars would you give the Cinematography in ${movieTitle}? `));
    if (cinematographyRating > MAX_RATING || cinematographyRating < MIN_RATING) {
        console.log(`your entry is not between 1 and 10`);
        return setCinematogRating();
    }
}

function setActingRating() {
    actingRating = Number(PROMPT.question(`Out of 10 how many stars would you give the Acting in ${movieTitle}? `));
    if (actingRating > MAX_RATING || actingRating < MIN_RATING) {
        console.log(`your entry is not between 1 and 10`);
        return setActingRating();
    }
}

function setWritingRating() {
    writingRating = Number(PROMPT.question(`Out of 10 how many stars would you give the writing in ${movieTitle}? `));
    if (writingRating > MAX_RATING || writingRating < MIN_RATING) {
        console.log(`your entry is not between 1 and 10`);
        return setWritingRating();
    }
}

function setPlotRating() {
    plotRating = Number(PROMPT.question(`Out of 10 how many stars would you give the plot in ${movieTitle}? `));
    if (plotRating > MAX_RATING || plotRating < MIN_RATING) {
        console.log(`your entry is not between 1 and 10`);
        return setPlotRating();
    }
}

function calcResults() {
    const ENTRY_NUMBER = 4;
    overallRating = (cinematographyRating + actingRating + writingRating + plotRating) / ENTRY_NUMBER;
    console.log(`Your average rating of ${movieTitle} is ${overallRating}`)
}

function returnQuestion() {
  answer =  PROMPT.question(`would you like to rate another movie? `);
    if (answer === `yes` || answer === `y`) {
       return setMovieTitle();
    }
}