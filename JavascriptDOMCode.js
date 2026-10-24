let value=document.getElementById("h1Tag");
let minus=document.getElementById("b1");
let plus=document.getElementById("b2");
let reset=document.getElementById("b3");
let into=document.getElementById("b4");
let count=0;

function dicrease(){
       if(count>0){
              count=count-1;
      value.textContent=count;
       }      
}

function increase(){

      count=count+1;
      value.textContent=count;
}
function equal(){

       count=0;
      value.textContent=count;
}
function double(){
       count=count*2;
       value.textContent=count;
}
minus.addEventListener('click',dicrease);
plus.addEventListener('click',increase);
reset.addEventListener('click',equal);
into.addEventListener('click',double);
