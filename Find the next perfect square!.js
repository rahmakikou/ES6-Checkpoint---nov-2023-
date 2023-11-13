 
//JSitor 

var a = 121
var b = 0
console.log(Number.isInteger(Math.sqrt(a)))
if (Number.isInteger(Math.sqrt(a))){
  b = (Math.sqrt(a)+1)**2
}

console.log(b)

//codeWars 

function findNextSquare(sq) {
var b = 0
if (Number.isInteger(Math.sqrt(sq))){
  b = (Math.sqrt(sq)+1)**2
}
  else {
    b= -1
  }

return(b)
}