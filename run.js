// var $ = require('jquery');
const fs = require('fs');
var mitcourses   = require('./mitcourses');
var getTitles    = require('./getTitles');
var getWords     = require('./getWords');
var getWordsFlat = require('./getWordsFlat');
var getScores    = require('./getScores');

var titles = getTitles(mitcourses);
console.log(titles);

var words = getWords(titles);
console.log(words);

var wordsFlat = getWordsFlat(words);
console.log(wordsFlat);

var scores = getScores(wordsFlat);
console.log(scores);

var str = "var scores = " + JSON.stringify(scores) + ";";
fs.writeFile('data.js', str, (err) => {})
