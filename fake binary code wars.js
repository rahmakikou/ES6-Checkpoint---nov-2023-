//solution1 
function fakeBin(x) {

    var str = x.split('')
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 5) {
        str[i] = 1
      } else {
        str[i] = 0
      }
    }
    return str.join('')
  }
  x = '45385593107843568'  
  console.log(fakeBin(x))  
   
  
  
  //solution2 
  console.log(x.split('').map(el => el > 5 ? 1 : 0).join(''))  