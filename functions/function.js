function diceRoll() {
    dice=Math.floor(Math.random()*6+1);
    console.log(dice);
}

diceRoll();


function Sum(a,b){
    return a+b;

}
let s= Sum(3,4);
console.log(s);

  function multiplication(a){
    for(let i=1;
        i<=10; i++){
       console.log(a*i);
        }
    
  }
    multiplication(5);



    function sumOfnNo(n){
        let sum=0;
        for (let i=1;i<=n ; i++){
            sum=sum+i;
        }
    return sum;
    }
     console.log(sumOfnNo(50));



     let str=["hello","world","javascript","functions"];
     function concat(str){
       let result ="";
         for(let i=0; i<str.length; i++){
             result+=str[i];
     }
     return result;
    }

    console.log(concat(str));



    ////lexical scope
    function outer(){
        let x=4;
        let y=5;
        function inerArea(){
            console.log(x * y);
    }
    inerArea();
}
   outer();

function factorial(n){
    if(n==0|| n==1){
        return 1;
     } else {
            return n*factorial(n-1);
        }
    }
      

   // let req=prompt("enter the number for which u want to calucalte the factoriaall")
   console.log(factorial( 5 ));


   const calculator={
    add: function(a,b){
        return a+b;
   },
   sub: function(a,b){
    return a-b;

   },

   mul : function(a,b){
    return a*b;
   }
};

function countVowels(str){
    let count=0;
    for (let i=0; i<str.length; i++){
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            count ++;
        }
        console.log(count);
    }
    return count;
}
countVowels("swayam");

//this keyword
const student={
    name:"swayam",
    eng:34,
    math:38,
    science:90,
    getAvg(){
        let avg = (this.eng + this.math + this.science)/3;
        console.log(avg);
    }


}



// try nd catch
console.log("hello  world");
try {
    console.log(calculator);
} catch{
    console.log ( "an error found");
}


// ARROW 
   const sum =(a,b)=> {
    console.log(a+b);
   }