// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// create new object array 
	// make all key:value   pairs elements of that array
	// use Array.toString method
	// var stringObject = [];

	// if(Array.isArray(obj)) {
	// 	obj.forEach(function(element) {
	// 		stringObject.push(element);
	// 	});
	// 	return '{ ' + stringObject.join(' ') + ' }';
	// } else {
	//   for(var key in obj) {
	// 	stringObject.push('"', key, ";", '"', obj[key], '"');
	//   }
	// return '{ ' + stringObject.join(' ') + ' }';
 //    }
 // 	var answer;
 // 	this = Object.create(obj.prototype);
 // 	if(Array.isArray(this)) {
	// 	this.forEach(function(element) {
	// 		answer.push(element);
	// 	});
	// 	return answer.toString();
	// } else {
	//   for(var key in stringObject) {
	// 	answer.push([key, obj[key]]);
	//   }
	// return answer.toString();
 //    }

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

	// if(typeof obj === 'string') {
	// 	return '"' + object + '"';
	// } else if(obj === undefined) {
	// 	return '"undefined"';
	// } else if(obj === null) {
	// 	return '"null"';
	// } else if(obj === NaN) {
	// 	return '"NaN"';
	// } else if(typeof obj = 'number') {
	// 	return '"' + obj + '"';
	// }

	if(obj === undefined) {
		return "undefined";
	}

	if(typeof obj === 'string') {
		return '"' + obj + '"'
	}

	if(typeof obj === 'number' || typeof obj === null || typeof obj === 'boolean') {
		return obj.toString();
	}

	if(Array.isArray(obj)) {

		var stringifiedArray = obj.slice().map(element => stringifyJSON(element));
		return '[' + stringifiedArray + ']';
	}

	if(typeof obj === 'object') {
		//use recursion again
		var stringifyObjectArray = [];
		for(var key in obj) {
			
		}
	}



};

// function stringifyOptForTco() {

// }

// var rer = [1, 2, 3, 'hello']
// console.log(rer.join(' ')

console.log(stringifyJSON([1,[1,2],'string', undefined]));
