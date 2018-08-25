//  Lemniscate ofBernoulli


let time = 0;
let scale = (2 / (3 - Math.cos(60*time)))*9;
let speed = 100;  // setTimeout(t, speed);
let multiple = 1;
let score = 0;
let missed = 0;


function t() {
    let monster=document.getElementById("cookie");

    animateMonster(monster);
    time += 1;
    setTimeout(t, speed);
}

setTimeout(t, speed);


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


//window.addEventListener('click', function(event){modifyScore(multiple, score, missed)});


function modifyScore(event){
    let monster=document.getElementById("cookie");
    let scoreMultiple = 5*multiple;

    let x = event.target;
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

    console.log(score);
    console.log(missed);
    console.log(speed);
    console.log('next');
}
