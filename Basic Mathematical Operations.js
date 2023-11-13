//solution1
const basicOp = (operation, value1, value2) => 
operation == '+'? value1+value2 : 
operation == '-' ? value1 - value2 : 
operation == '*' ? value1 * value2 : value1 / value2 

console.log(basicOp('-', 15, 18)) 


//solution2 


function dd(a,b,c){
    switch(a){
      case '+' : return b+c
                 break 
      case '-': return b - c
        break 
        case '*' : return b*c
                 break 
      case '/': return b / c
        break 
    default : return 'error'
      
    }
  }
  
  console.log(dd('+',4,3)) 