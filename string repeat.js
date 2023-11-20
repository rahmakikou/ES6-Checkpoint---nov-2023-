//my solution 
function repeatStr (n, s) {
    return s.repeat(n);
  } 

//solution2

repeatStr = (n, s) => s.repeat(n) 



//solution3 

function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
  } 

//solution4 


function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }