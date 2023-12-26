
const btnw=150;
const btnh=50;

const maxw = window.innerWidth - btnw;
const maxh = window.innerHeight - btnh;

window.addEventListener('DOMContentLoaded',()=>{
    const button = document.getElementById('btn');
    const btnYes = document.getElementById('btn-yes');
    const line = document.getElementById('line');


   
    button.addEventListener('mouseover',()=>{
        button.style.left=Math.floor(Math.random() * (maxw + 1)) + 'px';
        button.style.top=Math.floor(Math.random() * (maxh + 1)) + 'px';

    });
    
    btnYes.addEventListener("click",()=>{
      line.innerHTML="ok lets go!! ";
    });


});