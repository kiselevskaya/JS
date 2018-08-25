

function t() {
    let monster=document.getElementById("cookie");
    console.log("labuda-bada-bda");

    animateMonster(monster);

    setTimeout(t, 500);
};


setTimeout(t, 500);


function makeNewPosition(monster){

    let l = monster.offsetLeft;
    let t = monster.offsetTop;

    let box=document.getElementById("container");

    let h = box.offsetHeight-60;
    let w = box.offsetWidth-60;

    let angle = Math.random() * 2 * 3.1415;
    let length = Math.random() * 10;

    console.log(l, t, Math.cos(angle), Math.sin(angle));

    l = Math.floor(parseFloat(l) + length * Math.cos(angle));
    t = Math.floor(parseFloat(t) + length * Math.sin(angle));

    return [l,t];
};


function animateMonster(monster){
    let newPos = makeNewPosition(monster);

    monster.style.left = (newPos[1]) + 'px';
    monster.style.top = (newPos[0]) + 'px';
};
