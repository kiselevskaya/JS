

window.addEventListener("mouseover", function () {
    let monster=document.getElementById("cookie");
    console.log("labuda-bada-bda");

    animateMonster(monster);
});

function makeNewPosition(){
    console.log('Cookieeeee!');

    let box=document.getElementById("container");

    let h = box.offsetHeight-60;
    let w = box.offsetWidth-60;

    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);

    return [nh,nw];
};

function animateMonster(monster){
    console.log('Cookie Monster is coming!');

    let newPos = makeNewPosition();
    let oldPos = monster.offset;

    monster.style.left = (newPos[1] + 10) + 'px';
    monster.style.top = (newPos[0] + 10) + 'px';

//    animateMonster(monster);
}
