
var getWords = function(titles){

	var words = [];
	titles.forEach(function(item){words.push(item.toLowerCase().match(/[A-Za-z]+/g));});
	return words;
}


module.exports = getWords;
