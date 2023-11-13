 
function friend(friends) { 
    var realfriends= []   
  for (var i=0; i<friends.length; i++) { 
    if (friends[i].length === 4) 
      realfriends.push(friends[i])  
  }
  return realfriends  
  }   
  
  
  friends= ["Ryan", "Kieran", "Jason", "Yous"]
  
  console.log(friend(friends))  