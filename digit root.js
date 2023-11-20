//solution1

function digitalRoot(n) {
    if (n < 10) {
      return n;
    } 
  
    while (n > 9) {
      var digits = String(n).split("").map(Number);
      n = digits.reduce((sum, current) => sum + current);
    }
    console.log('n - ',n);
    return n;
  } 

//solution2 

function digital_root(n) {
    return--n%9+1;
  } 


//solution3

function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  } 


//solution4

function digital_root(n) {
    return n < 10 ? n : digital_root(String(n).split('').reduce((s,v)=>Number(s)+Number(v)));
  } 






