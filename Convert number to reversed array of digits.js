//my answer 
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

  // solution 2 

  const digitize = (x) => {
    x = `${x}`.split('').reverse();
    let a = []
    for(let i = 0; i < x.length; i++){
      a.push(+x[i])
    }
    return a
  } 

//other solution 

digitize = n => [...String(n)].map(Number).reverse()  

//Or you can put 

function digitize(n) {
   
    return n.toString().split('').reverse().map(Number) 
   }   


//also true 

function digitize(n) {
    return n.toString().split("").reverse().map(function(i){
      return parseInt(i);
    });
  } 

// or else 

function digitize(n) {
    //code here
    let numArr = [];
    
    while(n > 0){
      numArr.push(n % 10);
      
      n = Math.floor(n/10);
    }
    
    return numArr;
  } 