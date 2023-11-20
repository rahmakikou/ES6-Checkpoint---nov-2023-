//solution1 
const doubleChar = (str) => str.split("").map(c => c + c).join("");


//solution2 
function doubleChar(str) {
    var newSTR = '' ; 
     str.split('')
     for (var i=0; i<str.length; i++) {
       newSTR += str[i] + str[i]; 
       
     }
   return newSTR;
   };  


//solution3

function doubleChar(str) {
    return str.split("").map(function (char) {

      return char + char;

    }).join("");
  } 


  //solution4 

  function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
  } 