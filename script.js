let user=0;
let compu=0;
const choices=document.querySelectorAll(".choice");//this returns a  node list
let d=document.getElementById("msg");
let u=document.querySelector("#user");
let c=document.querySelector("#comp");
const getCompchoice=()=>{
    let a=["rock","paper","scissors"];
    let r=Math.floor(Math.random()*3);
    return a[r];
}
const drawGame=()=>{
    d.innerHTML="Its A Draw";
    d.style.color="black";
}
const ShowWinner=(userWin,userChoice,comp)=>{
    if(userWin){
        d.innerHTML=`You Win Your ${userChoice} beats ${comp}`;
        d.style.color="green";
        user++;
        u.innerText=user;
    }
    if(userWin==false){
        d.innerHTML=`You Lose ${comp} beats your ${userChoice}`;
        d.style.color="red";
        compu++;
        c.innerText=compu;
    }
}
const playGame=(userChoice)=>{
    console.log("user choice is is "+userChoice);
    let comp=getCompchoice();
    console.log("Computer Choice is "+comp);
    if(userChoice===comp){
        drawGame();
        return ;
    }
    let userWin=false;
    if(userChoice==="rock" && comp==="paper"){
        console.log("Computer Wins");
        userWin=false;
    }
    if(userChoice==="paper" && comp==="rock"){
        console.log("User Wins");
        userWin=true;
    }
    if(userChoice==="rock" && comp==="scissors"){
        console.log("User Wins");
        userWin=true;
    }
    if(userChoice==="scissors" && comp==="rock"){
        console.log("Computer Wins");
        userWin=false;
    }
    if(userChoice==="scissors" && comp==="paper"){
        console.log("User Wins");
        userWin=true;
    }
    if(userChoice==="paper" && comp==="scissors"){
        console.log("Computer Wins");
        userWin=false;
    }
    ShowWinner(userWin,userChoice,comp);
}
// for each loop  to access each element in the list
choices.forEach((i)=>{
    i.addEventListener("click",()=>{
        const userChoice=i.getAttribute("id");//returns the id of the iterator
        playGame(userChoice);
    })
})