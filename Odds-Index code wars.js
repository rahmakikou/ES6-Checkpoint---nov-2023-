
//solution1 


function oddBall(arr) {
    var posOdd = 0
    var exist = false
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] == "odd"){
        posOdd = i
      }
      }
  
    for (let i = 0; i < arr.length; i++) {
  
      if (arr[i] == posOdd) {
        exist = true
      }
    }
      return exist
  }
 

//solution2 

function oddBall(arr) { 

    return arr.includes(arr.findIndex(el => el === 'odd')) 
         
     }  
   
   
   var arr = ["even", 7, "even", 6, "even", 10, "odd"]
   
   console.log(oddBall(arr)) 