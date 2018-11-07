let numbers = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4, -3, 2.5, "bla-bla"];
let result = numbers.filter(item => (parseInt(item) == item) && item>0).sort((a, b)=>a - b).slice(0,2).reduce((a, b) => a + b);
console.log(result)
