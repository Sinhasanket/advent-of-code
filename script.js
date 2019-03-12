const fs = require('fs');

// solve 1
function question1(){
  fs.readFile('./input.txt',(err,data) =>{
      const direction = data.toString();
      const directionArray = direction.split('');
      const answer = directionArray.reduce((accumulator, currentValue) =>{
           if(currentValue === '('){
              return accumulator += 1;
           } else if(currentValue === ')'){
               return accumulator -=1;
           }
      },0)
      console.log('floor is :'+answer);
  })
}

question1();

// solve 2
function question2(){
  fs.readFile('./input.txt', (err,data) =>{
      const direction = data.toString();
      const directionArray = direction.split('');
      let accumulator = 0;
      let counter = 0;
      const answer = directionArray.some((currentFloor) =>{
          if(currentFloor === '('){
             accumulator +=1;
          } else if(currentFloor === ')'){
             accumulator -=1;
          }
          counter++;
          return accumulator < 0;
      })
      console.log('Basement entered at :'+ counter);
  })
}

question2();