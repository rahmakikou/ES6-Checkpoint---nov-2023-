//JSitor 

var a= 'la vie est belle' 
var x=a.split(' ')
console.log(x)

min = x[0].length  

for (let i = 0; i < x.length; i++) { 
  if (min > x[i].length ){
    min = x[i].length 
  }
  
}

console.log(min)   


//codeWars 

function findShort(s){ 
  
    var x = s.split(' ')
    
    
    min = x[0].length  
    
    for (let i = 0; i < x.length; i++) { 
      if (min > x[i].length ){
        min = x[i].length 
      }
      
    } 
      return min 
      
    } 