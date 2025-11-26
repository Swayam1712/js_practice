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
        