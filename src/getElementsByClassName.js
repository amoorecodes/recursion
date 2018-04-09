// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  return optimizedForTco(className);
};


var optimizedForTco = function(className) {
	  /* 
	  returns array-like object with all the child elements with given className
	  use jQuerry? => sublime console not working w/ jquerry
	  access body
	  run through all it's child elements
	  test if element.classList.contains(className)
	  push element to answer if does
	  return answer
	  every childNode getElementsByClassName?
	  */
  
	var answer = [];
    var testNode = function(node) {
  	//base case
  	if(node.classList && node.classList.contains(className)) {
  		answer.push(node);
  	}
  	//recursive call
  	node.childNodes.forEach(childNode => testNode(childNode));

  	return answer;
  }

  testNode(document.body);

  return answer;
}