
let time = 0;

function t() {
    let monster=document.getElementById("cookie");

    animateMonster(monster);
    time += 1;
    setTimeout(t, 5);
}

setTimeout(t, 5);

function get_x(t) {
    let x = t / 5.0 - 250;
    return x;
}

function get_y(x, t) {
    let y = Math.sin(t / 10.0) * 10;
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

    let x = get_x(time);
    let y = get_y(x, time);

    monster.style.left = (centerX + x) + 'px';
    monster.style.top = (centerY + y) + 'px';
}
