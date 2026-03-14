let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winchance = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let turnO = true;

boxes.forEach((box) =>
{
    box.addEventListener("click",() =>{
        if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    
    checkWinner();
    box.disabled = true;
    });
});

let checkWinner = () => {
    for(let chance of winchance)
    {    
        let val1=boxes[chance[0]].innerText;
        let val2=boxes[chance[1]].innerText;
        let val3=boxes[chance[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !="")
        {
        if(val1 === val2 && val2===val3)
        {
            document.querySelector("h3").innerText = " Winner";
        }
    }
    }
};


reset.addEventListener("click",() =>{
    for(let b of boxes ){
        b.innerText = "";
        b.disabled = false;
    }

    document.querySelector("h3").innerText ="";
})