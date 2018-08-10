

let speed = 10; // the monster will move by 10 pixels on every step
let direction = Math.floor(Math.random() * 5); // direction to the right (to the left *(-1))


window.addEventListener("mouseover", function () {
    let monster=document.getElementById("cookie");
    let box=document.getElementById("container");
    if (monster){
        console.log("labuda-bada-bda");
    } else {
        console.log("No Monster");
    };
    console.log('Cookie Monster is coming!');

//    let x = monster.offsetWidth/2;
//    let y = monster.offsetHeight/2;


    // Calculate and store some of the monster coordinates:
    let monsterLeftPos = monster.offsetLeft;
    let monsterRightPos = monsterLeftPos + monster.offsetWidth;
    let monsterTopPos = monster.offsetTop;
    let monsterBottomPos = monster.offsetTop + monster.offsetHeight;
    // When right side of the monster goes too far - change direction:
    if (monsterRightPos > box.offsetWidth - 6) {
        direction = Math.floor(Math.random() * 5)*(-1);
        console.log(monsterRightPos);
    }
    // When left side of the monster goes too far - change direction:
    if (monsterLeftPos < 6) {
        direction = Math.floor(Math.random() * 5);
        console.log(monsterLeftPos)
    }
    // When bottom side of the monster goes too far - change direction:
    if (monsterBottomPos > box.offsetHeight - 6) {
        direction = Math.floor(Math.random() * 5)*(-1);
        console.log(monsterBottomPos);
    }
    // When top of the monster goes too far - change direction:
    if (monsterTopPos < 6) {
        direction = Math.floor(Math.random() * 5);
        console.log(monsterTopPos)
    }
    // Recalculate position:
    monster.style.left = (monsterLeftPos + speed * direction) + 'px';
    monster.style.top = (monsterTopPos + speed * direction) + 'px';
});
