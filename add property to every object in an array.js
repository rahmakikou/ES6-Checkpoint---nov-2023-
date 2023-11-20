//my solution 

questions.forEach((Q)=>(Q.usersAnswer = null)) 


//solution2 
questions.forEach (function (Q) {
   
    Q.usersAnswer = null 
  })
  


  //with a for loop 

  for (i=0; i<questions.length; i++) {
    questions[i].usersAnswer = null;

    }; 

    //or you can do this 

    for (obj of questions) {
        obj['usersAnswer'] = null;
      } 