function removeSmallest(numbers) {

    //make a newtab =copy of the original 
  
    const newtab = numbers.slice(0)
  
    //find smallest value 
  
    let smallestValue = numbers.indexOf(Math.min(...numbers))
  
    newtab.splice(smallestValue, 1);
  
    //Return new array 
  
    return newtab
  }
  
  numbers = [1, 2, -77, 3, 4, -5] 
  console.log(removeSmallest(numbers))  