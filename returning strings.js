function greet(name){
    return `Hello, ${name} how are you doing today?` 
  } 


//else 

function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
  } 


//or you can do 

const greet = name => `Hello, ${name} how are you doing today?`; 


//also true 

function greet(name){
    let a= name.split("");
        let j=[];
           a[0]="Hello,"
           a[1]=name
           a[2]="how are you doing today?"
           j.push(a[0],a[1],a[2])
           return j.join(" ")
} 