// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //first check for every non-object, acting as base cases.
 if (typeof obj === "string") {
  return '"' + obj + '"';
} else if (typeof obj === "number") {
  return obj.toString();
} else if (typeof obj === "boolean") {
  return obj ? "true" : "false";
} else if (typeof obj === "undefined") {
  return null;
 } else if (obj === null) {
  return "null";
 } else if (Array.isArray(obj)) { //arrays before objects
  
  var values = obj.map(function(item) {
    return stringifyJSON(item); //recursively call for each item in array, rejoin as array
  }).join(",");
  
  return '[' + values + ']';
 
 } else if (typeof obj === "object") {

  var values = []; //cache key value pairs, similar to arrays

  Object.keys(obj).forEach(function(key) {
    var value = stringifyJSON(obj[key]); //recursively call for each key in obj
    if (value !== null) { //null is base case for nested objects
      values.push('"' + key + '":' + value);
    }
  });
  return "{" + values.join(",") + "}";
 } else {
  return null; //account for unstringifiable things
 }
}
  
