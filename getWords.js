
var getWords = function(titles){

	// -----------------------------------
	//  YOUR CODE
	//  Filter out punctuation/numbers
	//  Return words array
	// -----------------------------------	
	// var str = "I've found 4 ducks on 11th street.";
	var words = [];
	titles.forEach(function(item){words.push(item.toLowerCase().match(/[A-Za-z]+/g));});
	return words;
}


module.exports = getWords;
