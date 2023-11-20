//ES6 

function peopleWithAgeDrink(old) {
    return old <= 13 ? 'drink toddy' : old <= 17 ? "drink coke" : (old <= 18 || old <= 20) ? "drink beer" : "drink whisky"
    }; 


//JavaScript  (solution 1)

function peopleWithAgeDrink(age) {
    if (age<14) {
      return ('drink toddy') 
    } else if ((age>=14) && (age<18)) {
      return ('drink coke')
    } else if ((age>=18) && (age <21)) {
      return ('drink beer')
    } else {
    return ('drink whisky')
    }
 };  

 //solution3 
var peopleWithAgeDrink = function(old) {

    if(old < 14){
      return ("drink toddy");
      }
      
      else if((old < 18) && (old >= 14)){
      return ("drink coke");
      }
      
      else if((old < 21) && (old >= 18)){
      return ("drink beer");
      }
      
      else if(old >= 21){
      return ("drink whisky");
      } 