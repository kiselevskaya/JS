

let n = 1234576;


function descendingOrder(n){
    result = parseInt(n.toString().split('').sort(function(a, b){return b-a}).join(''));
    console.log(result);
    return parseInt(n.toString().split('').sort(function(a, b){return b-a}).join(''));
}


descendingOrder(n);

