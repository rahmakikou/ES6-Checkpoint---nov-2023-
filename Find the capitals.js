var capitals = function (word) {
    newtab =  [ ] 
       for (var i=0; i<word.length; i++) { 
      if(word [i].toUpperCase()==word [i]) {
         newtab.push(i) 
      }
     }
    return newtab 
  } 