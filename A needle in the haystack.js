function findNeedle(haystack) {

  return `found the needle at position ${haystack.findIndex(el=> el =="needle")}`
  
  }  

var haystack = ["Paris", "faith", "bravery","peace","needle","trust"]

console.log(findNeedle(haystack))  

