function points(games) {
    let total =0; 
    games.map(game=>{
        if(game[0]===game[2]){
            total +=1; 
        } else if (game[0]>game[2]){
            total +=3; 
        }
    }); 
    return total 
} 

//solution2
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0) 


//solution3


function points(games) {
    return games.reduce((current, element) => {
      let arraySplit = element.split(':');
      return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
  } 