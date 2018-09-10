

let startLog;
let endLog;
let logs;
let monsters = ["elmo.png", "big-bird.png", "oscar.png", "abby.png", "count-von-count.png", "bert.png", "kermit.png", "grover.png", "ernie.png", "cookie.png"];

let time = 0;
let scale = (2 / (3 - Math.cos(60*time)))*9;
let speed = 100;
let multiple = 1;
let score = 0;
let missed = 0;
let started = false;
let monster=document.getElementById("cookie");

let gameOver = document.createElement("img");
gameOver.setAttribute("src", "gameover.png");
gameOver.setAttribute("id", "gameover");

let won = document.createElement("img");
won.setAttribute("src", "won.png");
won.setAttribute("id", "won");

let timerId;

function start(){
    if (started===false){
        startLog = new Date().getTime();
        logs = [];
        document.getElementById("one").innerHTML = logs;
        console.log(logs);
        multiple = 1;
        score = 0;
        missed = 0;
        document.getElementById("level").innerHTML = "LEVEL " + multiple;
        document.getElementById("score").innerHTML = score;
        document.getElementById("missed").innerHTML = missed;
        speed = 100;
        started=true;
        if (gameOver){
            gameOver.remove();
        }
        if (won){
            won.remove();
        }
        timerId = setTimeout(t, speed);
    }
}


function t() {
    let monster=document.getElementById("cookie");
    animateMonster(monster);
    time += 1;
    timerId = setTimeout(t, speed);
}


function get_x(t, scale){
    let x = scale * Math.cos(t/30)*30;
    return x;
}


function get_y(t, scale){
    let y = scale * Math.sin(2*t/30)*30 / 2;
    return y;
}


function animateMonster(monster){
    let box=document.getElementById("container");

    let width = box.offsetWidth;
    let height = box.offsetHeight;

    let centerX = width/2-35;
    let centerY = height/2-35;

    let monsterLeft = monster.offsetLeft;
    let monsterTop = monster.offsetTop;

    let x = get_x(time, scale);
    let y = get_y(time, scale);

    monster.style.left = (centerX + x) + 'px';
    monster.style.top = (centerY + y) + 'px';
}


function modifyScore(event){
    let monster=document.getElementById("cookie");
    let scoreMultiple = 3*multiple;

    let x = event.target;
    if (started===true){
        if (x == monster){
            score += 1;
            if (score == scoreMultiple){
                multiple += 1;
                speed -= 5;
                monster.setAttribute("src", monsters[multiple-2]);
            }
        } else {
            missed += 1;
            endLog = new Date().getTime();
            logs.push(missed + " time you missed is on: " + (endLog-startLog)/1000 + "sec");
        }
    }
    if (multiple===11){
        multiple = 10;
    }
    document.getElementById("level").innerHTML = "LEVEL " + multiple;
    document.getElementById("one").innerHTML = logs.join("<br>");
    document.getElementById("score").innerHTML = score;
    document.getElementById("missed").innerHTML = missed;
    if (missed===10){
        started = false;
        document.getElementById("container").appendChild(gameOver);
        console.log(monster);
        clearTimeout(timerId);
        return;
    }
    if (score===10*3) {
        started = false;
        document.getElementById("container").appendChild(won);
        clearTimeout(timerId);
        return;
    }
}
