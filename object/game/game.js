const max =prompt("Enter the maximum number");
// cronsole.log(max);


const  random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess=prompt("Guess the number"   );
 

while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
         if (guess==random){
    console.log("You win");
    }
     else if(guess>random){

        console.log("Too high");
    }
    else if(guess<random){

        guess=prompt ("too low try again");
    }


 
    

else {
  guess=prompt("Try again");
    

}
//guess=prompt("Guess the number"   );

}