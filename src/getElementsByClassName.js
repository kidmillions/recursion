// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className)
{
	var elements = [];
	var searchNodes = function(node) {
		if (!node.hasChildNodes) {
			return;
		} else {
			var childNodes = node.childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				if (childNodes[i].classList) {
					if (childNodes[i].classList.contains(className)) {
					elements.push(childNodes[i]);
					}
				}	
				searchNodes(childNodes[i]);
			}
		}
	}
	searchNodes(document);
	return elements;
};
