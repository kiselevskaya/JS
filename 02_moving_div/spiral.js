

let step = 20;
let increment = 2*Math.PI/step;
let theta = increment;
let decrease = false;


function t() {
    let monster=document.getElementById("cookie");

    animateMonster(monster);

    setTimeout(t, 10);
}


setTimeout(t, 10);


function animateMonster(monster){
    let box=document.getElementById("container");

    let width = box.offsetWidth;
    let height = box.offsetHeight;

    let centerX = width/2-25;
    let centerY = height/2-25;

    let monsterLeft = monster.offsetLeft;
    let monsterTop = monster.offsetTop;

    let newLeft = centerX + theta * Math.cos(theta);
    let newTop = centerY + theta * Math.sin(theta);

    monster.style.left = newLeft + 'px';
    monster.style.top = newTop + 'px';

    if (monsterLeft < 5){
        decrease = true;
    } else if (monsterLeft > width-30){
        decrease = true;
    } else if (monsterTop < 5){
        decrease = true;
    } else if (monsterTop > height-30){
        decrease = true;
    } else if (monsterLeft == centerX && monsterTop == centerY){
        decrease = false;
    };
    if (decrease === false){
        theta = theta + increment;
    } else if (decrease === true){
        theta = theta - increment;
    };
};
