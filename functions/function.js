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
   console.log(factorial(7));