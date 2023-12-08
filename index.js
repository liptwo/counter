const numberCounter =  document.getElementById("sodem");
const deBt = document.getElementById("button-de");
const reBt = document.getElementById("button-re");
const inBt = document.getElementById("button-in");
let counter=0;

function updates(){
    if (counter<0){
        counter =0;
    }
    numberCounter.innerHTML=counter;
   
}
inBt.addEventListener("click", ()=>{
    counter++;
    updates();

    
});
deBt.addEventListener("click", ()=>{
    counter--;
    updates();

    
});
reBt.addEventListener("click", ()=>{
    counter=0;
    updates();

    
});
