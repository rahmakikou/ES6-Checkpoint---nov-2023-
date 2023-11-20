

const reverseWords = str => 

   str.split(' ').map(el=>[ ...el].reverse().join('')).join(' ') 
    

// solution 2 

function reverseWords(str) {
   
    return str.split(' ').map(function(word){
      
        return word.split('').reverse().join('');
   
    }).join(' ');
    
  } 