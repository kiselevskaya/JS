

let busStops=[[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

console.log('output is 21');


let number = function(busStops){
//    let take = [];
//    let drop = [];
//    for (i in busStops){
//        take.push(busStops[i][0]);
//        drop.push(busStops[i][1]);
//    }
//    return (take.reduce(function(a, b) { return a + b; }, 0)-drop.reduce(function(a, b) { return a + b; }, 0))

    return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
//    return busStops.reduce((people, stop) => people + stop[0] - stop[1], 0);
}

console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
