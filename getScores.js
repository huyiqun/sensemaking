
var getScores = function(wordsFlat){

	var scores = {};
	for (var i = 0; i < wordsFlat.length; i++) {
	var word = wordsFlat[i];
	scores[word] = scores[word] ? scores[word] + 1 : 1;
	}

	return scores;

}


module.exports = getScores;
