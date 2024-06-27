 const game=document.querySelector("#game");






 function board(){
    for(let i=0;i<9;i++){
    const btn=document.createElement("button");
    btn.classList.add("box");
    
    game.append(btn);
    }
 }

 board();