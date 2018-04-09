// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	
 	/*
 					 FOLLOW JSON FORMAT 
 	for(var key in obj) {
		stringObject.push('"',key,'"',:, '"',obj[key]],'"');
	  }
	return '{ ' + stringObject + ' }';
	*/

	/*
	check for all possible cases: string, number, array, object, undefined, NaN, boolean, null, symbol, function 

	*/


	if(obj === undefined) {
		return "undefined";
	}

	if(typeof obj === 'string') {
		return '"' + obj + '"'
	}

	if (obj === null) {
		return "null";
	}

	if(typeof obj === 'number' || typeof obj === 'boolean') {
		return obj.toString();
	}

	if(Array.isArray(obj)) {

		var stringifiedArray = obj.slice().map(element => stringifyJSON(element));
		return '[' + stringifiedArray + ']';
	}

	else {
		var stringifyObjectArray = [];
		for(var key in obj) {
			if(typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {

				stringifyObjectArray.push(stringifyJSON(key),':',stringifyJSON(obj[key]),',');
			}
		}
		return '{' + stringifyObjectArray.slice(0, -1).join('') + '}'
	}



};

// function stringifyOptForTco() {

// }

console.log(stringifyJSON([1,[1,2],'string', {a:1, b:2}, null, function(){}]),);
