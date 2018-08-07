

let speed = 10; // the monster will move by 10 pixels on every step
let direction = 2; // direction to the right (to the left will be -1)


window.addEventListener("mouseover", function () {
    let monster=document.getElementById("cookie");
    let box=document.getElementById("container");
    if (monster){
        console.log("labuda-bada-bda");
    } else {
        console.log("No Monster");
    };
    console.log('Cookie Monster is coming!');
    // Calculate and store some of the monster coordinates:
    let monsterLeftPos = monster.offsetLeft;
    let monsterRightPos = monsterLeftPos + monster.offsetWidth;
    // When right side of the monster goes too far - change direction:
    if (monsterRightPos > box.offsetWidth - 6) {
        direction = -1;
        console.log(monsterRightPos);
    }
    // When left side of the monster goes too far - change direction:
    if (monsterLeftPos < 0) {
        direction = 1;
        console.log(monsterLeftPos)
    }
    // Recalculate position:
    monster.style.left = (monsterLeftPos + speed * direction) + 'px';
});
