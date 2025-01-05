let gameSeq = [];
let userSeq= [];

let btns=["red", "yellow", "green", "purple"];
let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started==false){
        console.log("Game is started");
        started=true;

        levelUp();
    }
});


function btnFlash(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    }, 250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    //random button choose:
    let randomIndex= Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq)    
    // console.log("Index:",randomIndex);
    // console.log("Color:", randomColor);
    // console.log(randomBtn);
    
};

function checkAns(idx){
    // console.log("Current level", level);

    if( userSeq[idx]==gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerText=`Game Over at level ${level}. Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    console.log(this);
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".button")

for (btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq=[];
    level=0;
    userSeq=[];
}