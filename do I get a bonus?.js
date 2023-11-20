function bonusTime(salary, bonus) {
    if(bonus === true){
      return '£' + salary * 10;
      } else {
      return '£' + salary;
    }
  } 



//solution2
function bonusTime(salary, bonus) {
    
    if ( bonus == true){
      return (`£${salary*10}`)
    }
      else {
        return (`£${salary}`)
      }
    
    } 


//solution3 

function bonusTime(salary, bonus) {
    return bonus ? '£' + salary * 10 : '£' + salary;
    } 


//JSitor 

var salary = 1000 
var bonus = false 

if (bonus == true) {
    console.log(`£ ${ salary*10}`)
  }
  else {
    console.log(`£ ${ salary }`)
  } 