

let gotResult=false;
let count=0;


function output(val){
    let display=document.getElementById("display");
    let oldVal=display.innerHTML;
    let lastChar=oldVal.slice(-1);
    let operators=['+', '-', '*', '/'];
    let nums=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (nums.includes(val)){
        if (display.innerHTML==0 || display.innerHTML=='Zero division error'){
            display.innerHTML=val;
            count+=1;
            gotResult=false;
        } else if (gotResult==true){
            return display.innerHTML;
        } else {
            display.innerHTML+=val;
            count+=1;
            gotResult=false;
        }
    }

    if (operators.includes(val)){
        if (operators.includes(lastChar)==true){
            display.innerHTML=oldVal.slice(0, -1)+val;
        } else {
            display.innerHTML+=val;
            count+=1;
        }
        gotResult=false;
    }

    if (val=='.'){
        if (lastChar=='.' || gotResult==true){
            return display.innerHTML;
        } else if (operators.includes(lastChar)==true){
            display.innerHTML+=('0'+val);
            count+=2;
        } else {
            display.innerHTML+=val;
            count+=1;
        }
    }
}


function result(){
    let val=document.getElementById("display").innerHTML;
    let skip=['+', '-', '*', '/', '.'];
    if (val.slice(-2)=='/' && val.slice(-2)==0){
        document.getElementById("display").innerHTML='Zero division error';
    } else if (val.slice(-3)=='/' && val.slice(-2)=='0' && val.slice(-2)=='.'){
        document.getElementById("display").innerHTML='Zero division error';
    } else if (skip.includes(val.slice(-1)) && skip.includes(val.slice(-2))){
        document.getElementById("display").innerHTML=eval(val.slice(0, -2));
    } else if (skip.includes(val.slice(-1))){
        document.getElementById("display").innerHTML=eval(val.slice(0, -1));
    } else {
        document.getElementById("display").innerHTML=eval(val);
    }
    gotResult = true;
    count = 0;
}


function AC() {
    display = document.getElementById("display");
    display.innerHTML = 0;
    gotResult = false;
    count = 0;
}


function CE() {
    let val = document.getElementById("display").innerHTML;
    if (count > 0){
        if (val.length<2){
            document.getElementById("display").innerHTML = 0;
        } else {
            document.getElementById("display").innerHTML = val.slice(0, -1);
        }
        count -= 1;
    }
}
