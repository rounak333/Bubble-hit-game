


var timer = 60;
var score = 0;
var hitrn=0;

function responsive() {
  let q = window.matchMedia("(max-width:700px)");
  if(q.matches)
  {
   function makeBubble(){
      var clutter=" ";
  
  
  for(var i = 1; i<=120 ; i++)
  {
      var rn = Math.floor(Math.random()*10)
      clutter += `<div class="bubble">${rn}</div>`;
  }
  
  document.querySelector("#pbtm").innerHTML = clutter;
  }
  }
  else{
   function makeBubble(){
      var clutter=" ";
  
  
  for(var i = 1; i<=184 ; i++)
  {
      var rn = Math.floor(Math.random()*10)
      clutter += `<div class="bubble">${rn}</div>`;
  }
  
  document.querySelector("#pbtm").innerHTML = clutter;
  }
  }
  makeBubble();

  document.querySelector("#pbtm").addEventListener("click",function (dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitrn){
       increaseScore();
       getNewhit();
       makeBubble();
   }

});


} 

function runTimer(){
 var timerint = setInterval(function () {
        
        if(timer>0){
           timer--;
           document.querySelector("#timerVal").textContent = timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<span><h1>Game Over</h1>       <h1>your score ${score}</h1></span>`;
            
            // alert("Game over!");
        }
    },1000);
}

function getNewhit(){
   
  hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore(){
    score+= 10;
    document.querySelector("#scoreVal").textContent = score;
}


function Start(){
    document.querySelector("#startGame").addEventListener("click",function (button){
      
        runTimer();
       hideStart();
    });
   
};


function hideStart(){
    document.querySelector(".startDiv").innerHTML = `<h2 class="innerDiv"> Game is started</h2>`;

}


responsive();
getNewhit();
Start();



