//solution 1

function arithmetic(a, b, operator) {
    if (operator === 'add') return a + b;
    if (operator === 'subtract') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') return a / b;
  }
 
  
//with switch 

function arithmetic(a, b, operator) {
    switch (operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b; 

    }
}
 

//ES6

const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]); 

// or 

const arithmetic = (a, b, operator) => {
    return  ( 
      operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
   } 

//else 

function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
  } 



