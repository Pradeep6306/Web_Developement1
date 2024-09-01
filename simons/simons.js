 let gameSequence=[];
 let userSequence=[];

 let btns=["red","yellow","purple","green"];

 let started=false;
 let level=0;


 let h2=document.querySelector("h2");

 document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");
        levelup()
    }
 })

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

 }
 function userFlash(btn){
   btn.classList.add("user");
   setTimeout(function(){
       btn.classList.remove("user");
   },250);

}
 function levelup(){
   userSequence=[];
    level++;
    h2.innerText=`Level=${level}`;

    //chose random button
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(gameSequence);

    gameFlash(randombtn);

  
 }

 function checkAns(idx){
   
   if(gameSequence[idx]===userSequence[idx])
   {
      if(userSequence.length==gameSequence.length){
         setTimeout(levelup,1000);
      };
   }
   else{
      h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
   }
 }

 function btnPress(){ 
     let btn=this;
     userFlash(btn);
     let userpresscolor=btn.getAttribute("id");
     userSequence.push(userpresscolor);



     checkAns(userSequence.length-1)

    
 }

 let allBtns= document.querySelectorAll(".btn");
 for(btn of  allBtns ){
   btn.addEventListener("click",btnPress)
 }


function reset(){
   started=false;
   gameSequence=[];
   userSequence=[];
   level=0;

}

