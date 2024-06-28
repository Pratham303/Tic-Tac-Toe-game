 const game=document.querySelector("#game");
 const newgame=document.querySelector("#reload");
 let arr=[0,0,0,0,0,0,0,0,0];

   let turn="O";



 function board(){
    for(let i=0;i<9;i++){
    const btn=document.createElement("button");
    btn.classList.add("box");
    btn.setAttribute("data-index",i);
    
    
    game.append(btn);
   
    }
 }

 function playerturn(){
   turn= turn=="O"? "X":"O";
 }

game.addEventListener("click",(e)=>{

    if(turn=="O")
        {
            let x=e.target.dataset.index;
            arr[x]=2;
            e.target.innerText="O";
            
            if(winner(2))
              {
                let box=document.createElement("div");
                box.classList.add("winner");
                document.querySelector("#container").before(box);
                box.innerText="PLAYER O IS WINNER!!!"
              }
        }

        else{
            let x=e.target.dataset.index;
            arr[x]=5;
            e.target.innerText ="X";
            
            
            if(winner(5))
              {
                let box=document.createElement("div");
                box.classList.add("winner");
                document.querySelector("#container").before(box);
                box.innerText="PLAYER X IS WINNER!!!"
              }
            
          
        }
        e.target.disabled=true;
        playerturn(); 
});

function winner(x){
x=x*x*x;
if(arr[0]*arr[1]*arr[2]==x||
  arr[3]*arr[4]*arr[5]==x ||
  arr[6]*arr[7]*arr[8]==x||
  arr[0]*arr[3]*arr[6]==x||
  arr[1]*arr[4]*arr[7]==x||
  arr[2]*arr[5]*arr[8]==x||
  arr[0]*arr[4]*arr[8]==x||
  arr[2]*arr[4]*arr[6]==x  )

{
return true;
}
return false;

}
 

 board();

newgame.addEventListener("click",function(){
  document.querySelector(".winner").remove();

  document.querySelectorAll(".box").forEach((x)=>{x.innerText="";
    x.disabled=false;
  });
  for(let y of arr)
    {
      y=0;
    }

})
