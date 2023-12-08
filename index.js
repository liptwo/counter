const numberCounter =  document.getElementById("sodem");
const deBt = document.getElementById("button-de");
const reBt = document.getElementById("button-re");
const inBt = document.getElementById("button-in");
const qrBt = document.getElementById("button-qr");
const demo = document.querySelectorAll('.button-50')
let counter=0;

function updates(){
    if (counter<0){
        counter =0;
    }
    numberCounter.innerHTML=counter;
} 
qrBt.addEventListener("click", ()=>{
        deBt.classList.toggle("button-50");
        deBt.classList.toggle("button-54");

        inBt.classList.toggle("button-50");
        inBt.classList.toggle("button-54");

        qrBt.classList.toggle("button-50");
        qrBt.classList.toggle("button-54");

        reBt.classList.toggle("button-50");
        reBt.classList.toggle("button-54");
}
);
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
