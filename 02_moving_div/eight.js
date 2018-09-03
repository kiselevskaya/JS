//  Lemniscate ofBernoulli


let time = 0;
let scale = (2 / (3 - Math.cos(60*time)))*9;
let speed = 100;  // setTimeout(t, speed);
let multiple = 1;
let score = 0;
let missed = 0;
let started = false;
//let monsterRemoved = false;
let monster=document.getElementById("cookie");

let gameOver = document.createElement("img");
gameOver.setAttribute("src", "gameover.png");
gameOver.setAttribute("id", "gameover");

let timerId;

function start(){
    if (started===false){
        score = 0;
        missed = 0;
        document.getElementById("score").innerHTML = score;
        document.getElementById("missed").innerHTML = missed;
        speed = 100;
        started=true;
//        if (monster===null){
//            monster.setAttribute("src", "cookie_monster.png");
//            newCookie.setAttribute("id", "newMonster");
//            newCookie.innerHTML = html;
//            cookie.appendChild(newElement);
//            document.getElementById("cookie").appendChild(gameOver);
//        }
        if (gameOver){
            console.log('Game over');
            gameOver.remove();
//            document.getElementById("container").removeAttribute(gameOver);
        }
//        if (monsterRemoved===true) {
//            console.log('no monster');
//            gameOver.remove();
//            monster.setAttribute("src", "cookie_monster.png");
//            document.getElementById("container").appendChild(monster);
//        }
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
    let scoreMultiple = 3*multiple;

    let x = event.target;
    if (started===true){
        if (x == monster){
            console.log("catch");
            score += 1;
            if (score == scoreMultiple){
                multiple += 1;
                speed -= 10;
            }
        } else {
            missed += 1;
        }
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("missed").innerHTML = missed;
    if (missed===10){
        started = false;
        document.getElementById("container").appendChild(gameOver);
//        monster.setAttribute("src", "");
//        monster.remove();
        console.log(monster);
        clearTimeout(timerId);
        return;
    }
}
