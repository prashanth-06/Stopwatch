
let startEl=document.getElementById('start')
let stopEl=document.getElementById('stop')
let resettEl=document.getElementById('reset')

let hourEl=document.getElementById('hr');
let minEl=document.getElementById('mn');
let secEl=document.getElementById('ss');
let countEl=document.getElementById('count')

let hour=0;
let min=0;
let sec=0;
let count=0;

let timer=false


startEl.onclick=function(){
    timer=true;
    stopWatch()
}

stopEl.onclick=function(){
    timer=false
}


resettEl.onclick=function(){
    timer=false
    hour=0;
    min=0;
    sec=0;
    count=0;
    hourEl.textContent=hour;
    minEl.textContent=min;
    secEl.textContent=sec;
    countEl.textContent='00';
    
}

function stopWatch(){
    if (timer==true){
        count+=1;
        if (count==100){
            sec+=1
            count=0

        }
        if(sec==60){
            min+=1
            sec=0
        }
        if (min==60){
            hour+=1;
            min=0;
            sec=0;
        }
       
        setTimeout('stopWatch()',10)
        countEl.textContent=count;
        secEl.textContent=sec;
        minEl.textContent=min;
        hourEl.textContent=hour
    }

    

}

