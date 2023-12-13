let timer = 60;
let hitVal;
let score = 0;
function makeBubble() {
    let bubbles="";
    for(let i=0; i<250; i++){
        let hit = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${hit}</div>`
   }
   document.querySelector("#mainPannel").innerHTML = bubbles;
}

function runTimer(){
    setInterval(function(){
        if (timer>0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            document.querySelector("#mainPannel").innerHTML = `<h1>GAME OVER <br> Your Score : ${score}</h1>`
            clearInterval(timer);
        }
    },1000)
}

function hitValue(){

         hitVal = Math.floor(Math.random()*10);
        document.querySelector("#hitVal").textContent = hitVal;
}

function scrorePlus(){
        score += 10;
        document.querySelector("#score").textContent = score;
}

function scroreMinus(){
    score -= 5;
    document.querySelector("#score").textContent = score;
}

    document.querySelector("#mainPannel").addEventListener("click", function(dets) {
        let clickNum=Number(dets.target.textContent);

        if (clickNum===hitVal) {
            scrorePlus();
            hitValue();
            makeBubble();
    
        } else {
            scroreMinus();
        }
    });



// function updateData(){
    
// }

makeBubble();
runTimer();
hitValue();
// updateData();