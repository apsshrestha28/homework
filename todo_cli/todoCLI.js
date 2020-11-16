const readlineSync = require('readline-sync')
let totalanswer = [];
let completed = [];
let tickmark = "\u2713";

console.log('Welcome to Todo CLI!');
console.log('\n');
console.log("--------------------");
console.log("(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit");

while(true){
  let input = readlineSync.prompt();
  let choice = input.split("")[0];

  if(choice === 'n'){
    let answer = readlineSync.question('what?\n');
    totalanswer.push(answer);
  } 
  else if(choice === 'v'){

    if(totalanswer.length === 0){
      console.log('List is empty');
    }else{
      for(let i = 0;i < totalanswer.length;i++){
          let isPresent = false;
          
          for(let j = 0;j < completed.length;j++){
            if(totalanswer[i] === completed[j]){
              console.log(`${i} [${tickmark}] ${totalanswer[i]}`);
              isPresent = true;
              break;
            } 
          }
          
          if(!isPresent){
            console.log(`${i} [ ] ${totalanswer[i]}`);
          }
      } 
    }
    
  }
  else if(choice === 'c'){
    console.log(`Completed "${totalanswer[input[1]]}"`);
    completed.push(totalanswer[input[1]]);
    console.log(completed);
    
  }
  else if(choice === 'd'){
    let result =totalanswer.splice(input[1],1);
    console.log( `Deleted "${result}"`);
  }
    
  else if(choice ==='q'){
    console.log("See you soon!");
    break
  }    
  else {
    console.log("Sorry invalid input");
  }  
}