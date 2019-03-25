// var $ = require('jquery');
var mitcourses   = require('./mitcourses_small');
var getTitles    = require('./getTitles');
var getWords     = require('./getWords');
var getWordsFlat = require('./getWordsFlat');
var getScores    = require('./getScores');



var str = "Hello world!!!";
var regexp = /(\w+)\W*/g;
console.log(str.matchAll(regexp));

var regexp = RegExp(/<h3>(.*?)\s*<br>/g);
console.log(typeof mitcourses === 'string');
var a = mitcourses.matchAll(regexp);
console.log(a);
// let arr = [...mitcourses.matchall(regexp)];
// console.log(arr);
// var titles = getTitles(mitcourses);
// console.log(titles);

// var words = getWords(titles);
// console.log(words);

// var wordsFlat = getWordsFlat(words);
// console.log(wordsFlat);

// var scores = getScores(wordsFlat);
// console.log(scores);
