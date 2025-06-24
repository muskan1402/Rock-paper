let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

const gencompchoice = ()=>{
    const options = ["rock", "paper", "scissors" ,"rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random()*6);
    return options[randindx];
};


const showinner=(userwin , userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost! Your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawgame = ()=>{
    msg.innerText = "Game was draw Play again !";
    msg.style.backgroundColor = "purple";
};

const playgame=(userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false: true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="scissors"?false:true;
        }
        else{
            userwin = compchoice=="rock"? false:true;  }
    showinner(userwin , userchoice, compchoice);
        }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});