//wap to print the multiplication tablee of 5
//let mesage=prompt("enter a message");
//console.log(mesage);
/*for(let i=5 ;i<=50;i+=5)
{
    console.log(i);
}





//taking input from user and print the table of the numbber
let n=prompt("enter a number");
n=parseInt(n);
for(let j=n; j<=n*10; j+=n)
{
    console.log(j);
}



//neasted loop
for (i=1;i<=3;i++){
    console.log("outer loop"+i);
    for (j=1;j<=3;j++){
        console.log(j);
    }
}
 


//while loop
//  while (condition){
//      //code
//  }
    let i=1;
    while(i<5){
        console.log(i);
        i++;
    }*/


    //favourite movie game
    const fav="iron man";
    let guess=prompt("enter your favourite movie");
    while((guess!=fav)&&(guess!="quit")){
       // console.log("wrong guess ,try again");
        guess=prompt("plese try agian");

    }
    if(guess==fav){
        console.log("you guessed it right");
    }
    else {
        console.log("you quit the gamae");  
            
    }
        