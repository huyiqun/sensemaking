var getTitles = function(mitcourses){

	var titles = [];
	var regexp_g = RegExp(/<h3>(.*?)\s*<br>/g);
	var regexp = RegExp(/<h3>(.*?)\s*<br>/);
	let arr = [...mitcourses.match(regexp_g)];
	for (var s of arr){
		titles.push(s.match(regexp)[1]);
	}
	return titles;
}


module.exports = getTitles;
