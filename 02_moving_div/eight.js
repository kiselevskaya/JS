//  Lemniscate ofBernoulli


let time = 0;
let scale = (2 / (3 - Math.cos(60*time)))*9;
let speed = 100;  // setTimeout(t, speed);
let multiple = 1;
let score = 0;
let missed = 0;
let started = false;
let monsterRemoved = false;
let monster=document.getElementById("cookie");
let gameOver = document.createElement("img");
gameOver.setAttribute("src", "gameover.png");
gameOver.setAttribute("id", "gameover");


function start(){
    if (started===false){
        score = 0;
        missed = 0;
        speed = 100;
        started=true;
        if (monsterRemoved===true) {
            gameOver.remove();
            document.getElementById("container").appendChild(monster);
        }
        setTimeout(t, speed);
    } else {
        console.log("The game still on")
    }
}


function t() {
    let monster=document.getElementById("cookie");

    animateMonster(monster);
    time += 1;
    setTimeout(t, speed);
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

    let centerX = width/2-25;
    let centerY = height/2-25;

    let monsterLeft = monster.offsetLeft;
    let monsterTop = monster.offsetTop;

    let x = get_x(time, scale);
    let y = get_y(time, scale);

    monster.style.left = (centerX + x) + 'px';
    monster.style.top = (centerY + y) + 'px';
}


function modifyScore(event){
    let monster=document.getElementById("cookie");
    let scoreMultiple = 5*multiple;

    let x = event.target;
    if (started===true){
        if (x == monster){
            console.log("catch");
            score += 1;
            if (score == scoreMultiple){
                multiple += 1;
                speed -= 5;
            }
        } else {
            missed += 1;
        }
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("missed").innerHTML = missed;
    if (missed===2){
        started = false;
        monster.remove();
        monsterRemoved = true;
        document.getElementById("container").appendChild(gameOver);
    }
}
