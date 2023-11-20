var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let arr=[];
      for(let i=0;i<=count;i++) {arr.push(i)};
      let b=arr.reduce((total,next)=>total+next,0)
      let a=arr.join('+');
      if(count<0) return `${count}<0`;
      if(count==0) return `${count}=0`;
      return `${a} = ${b}`
    };
  
    return SequenceSum;
  
  })(); 
//solution2 

class SequenceSum {
    static showSequence(n) {
      return n < 0
        ? `${n}<0`
        : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
    }
  }


  //solution3 
  function SequenceSum() {}

  SequenceSum.showSequence = function(a) {
    if (a < 0) return `${a}<0`;
    if (a === 0) return '0=0';
    
    let arr = Array.from({length: a+1}, (_,i)=> i)
    return `${arr.join('+')} = ${arr.reduce((x,y)=> x + y)}`
  };


//solution4

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count < 0) {
        return count + "<0";
      }
      if (count === 0) {
        return "0=0";
      }
      let sum = 0;
      let text = "0";
      for (let n = 1; n <= count; n += 1) {
        sum += n;
        text += "+";
        text += n;
      }
      text += " = " + sum;
      return text;
    };
  
    return SequenceSum;
  
  })(); 

//solution5 

var SequenceSum = {showSequence : n => n<0 ? n+'<0' : [...Array(n+1).keys()].join('+') + (n ? ' = ' : '=') + n*(n+1)/2} 






