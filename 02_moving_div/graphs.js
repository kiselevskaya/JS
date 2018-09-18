

let muppet=document.getElementById("cookie");

let started=false;
let time = 0;
let scale = (2 / (3 - Math.cos(60*time)))*9;

let coord;
let timerId;
let multiple = 1;
let score = 0;
let missed = 0;
let speed = 100;
let level=1;

let step = 20;
let increment = 2*Math.PI/step;
let theta = increment;
let decrease = false;

let gameOver = document.createElement("img");
gameOver.setAttribute("src", "gameover.png");
gameOver.setAttribute("id", "gameover");

let won = document.createElement("img");
won.setAttribute("src", "won.png");
won.setAttribute("id", "won");

let monsters = ["elmo.png", "big-bird.png", "oscar.png", "abby.png", "count-von-count.png", "bert.png", "kermit.png", "grover.png", "ernie.png", "cookie.png"];


class Shape {
    constructor(x, y) {
        this.time = time;
        this.scale = scale;
        this.theta = theta;
        this.x = x;
        this.y = y;
    }

    get get_x(){
        return this.x;
    }

    get get_y(){
        return this.y;
    }

}


function beginning() {
    started=true;

    gameOver.remove();
    won.remove();

    startLog = new Date().getTime();
    logs = [];
    console.log(logs);

    multiple = 1;
    score = 0;
    missed = 0;
    speed = 100;
    level=1;
}


function start(){
    if (started===false){
        beginning();
    }
    document.getElementById("one").innerHTML = logs;
    document.getElementById("level").innerHTML = "LEVEL " + multiple;
    document.getElementById("score").innerHTML = score;
    document.getElementById("missed").innerHTML = missed;

    timerId = setTimeout(timeout, speed);
}


function timeout() {
    let muppet=document.getElementById("cookie");
    animateMuppet(muppet);
    time += 1;
    timerId = setTimeout(timeout, speed);
}


function animateMuppet(muppet){
    let box=document.getElementById("container");

    let width = box.offsetWidth;
    let height = box.offsetHeight;

    let centerX = width/2-30;
    let centerY = height/2-30;

    let muppetLeft = muppet.offsetLeft;
    let muppetTop = muppet.offsetTop;

    let x, y;
    let lamniscate = new Shape(scale * Math.cos(time/30)*30, scale * Math.sin(2*time/30)*30 / 2);
    let spiral = new Shape(theta * Math.cos(theta), theta * Math.sin(theta));

    let movingShape = [lamniscate, spiral];

    if (Math.abs(multiple % 2) == 1){
        console.log("odd");
        console.log('level: '+multiple);
        let shape = movingShape[0];
        x = shape.get_x;
        y = shape.get_y;

    } else if (Math.abs(multiple % 2) == 0){
        console.log("even");
        console.log('level: '+multiple);
        let shape = movingShape[1];
        x = spiral.get_x;
        y = spiral.get_y;
    }

    console.log(x);
    console.log(y);
    muppet.style.left = (centerX + x) + 'px';
    muppet.style.top = (centerY + y) + 'px';

    if (muppetLeft < 5){
        decrease = true;
    } else if (muppetLeft > width-30){
        decrease = true;
    } else if (muppetTop < 5){
        decrease = true;
    } else if (muppetTop > height-30){
        decrease = true;
    } else if (muppetLeft == centerX && muppetTop == centerY){
        decrease = false;
    }
    if (decrease === false){
        theta = theta + increment;
    } else if (decrease === true){
        theta = theta - increment;
    }
}


function modifyScore(event){
    let muppet=document.getElementById("cookie");
    let scoreMultiple = 3*multiple;

    let targetMuppet = event.target;
    if (started===true){
        if (targetMuppet === muppet){
            score += 1;
            if (score == scoreMultiple){
                multiple += 1;
                speed -= 5;
                muppet.setAttribute("src", monsters[multiple-2]);
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
        console.log(muppet);
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
