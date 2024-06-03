let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp() {

    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randbtn);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        // console.log("Same value");
        if (userSeq.length == gameSeq.length) {
            // levelUp();
            setTimeout(levelUp, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        h2.innerHTML = `Game Over! your score is <b>${level}!!</b> <br> press any key to start`;
        reset();
    }
}

function btnPress() {
    // console.log(this);a
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    // console.log(userSeq);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}