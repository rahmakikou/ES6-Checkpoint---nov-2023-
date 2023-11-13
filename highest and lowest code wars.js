 
 //solution1 
 
function highAndLow(numbers){
   
  numbers = numbers.split(" ");
   
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}  

 

//solution2 (codeWars)
function highAndLow(numbers){

  return [Math.max(...numbers.split(' ')), Math.min(...numbers.split(' '))].join(' ') 

//solution2(JSitor) 

var  numbers = ('35 90 999 6') 
 
console.log ([Math.max(...numbers.split(' ')), Math.min(...numbers.split(' '))].join(' ')) 

   


//solution3(codeWars)

function highAndLow(numbers){
  var x = numbers.split(' ').map(el=> +el)
  
  var min = x[0]
  var max = x[0]
  
  for (var i = 0; i < x.length; i++) {
    if (x[i] < min ) {
      min = x[i]
    }
    if (x[i]> max) {
      max = x[i]
    }
  }
  return([max,min].join(' ')) 

//solution3(JSitor)  
var numbers = ("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
var x = numbers.split(' ').map(el => +el)

var min = x[0]
var max = x[0]

for (var i = 0; i < x.length; i++) {
  if (x[i] < min) {
    min = x[i]
  }
  if (x[i] > max) {
    max = x[i]
  }
}
console.log( ([max, min].join(' '))) 