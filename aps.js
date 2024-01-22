

 
 

let   x=0;
let total = 0;
 function enter(){
    
     x = Math.random()*6 +1;
    
    document.querySelector("#value").innerHTML = Math.trunc(x);
    x=Math.trunc(x);
  if (true){
     let diskImg= document.querySelector(".images")
     diskImg.src =`images/dice-${x}.png`;
      
 }
   
   total +=x;

 if (total>=100){
    alert("you are  win the  Match")
    
    
}
  document.querySelector(".scorebox").innerHTML=`Your score is ${total}`;
  enter()= disabled;
}