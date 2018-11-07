

let check_m = 40539911473216;


//Test.assertEquals(findNb(4183059834009), 2022)
//Test.assertEquals(findNb(24723578342962), -1)
//Test.assertEquals(findNb(135440716410000), 4824)
//Test.assertEquals(findNb(40539911473216), 3568)
// n^3 + (n-1)^3 + ... + 1^3 = m


//function findNb(m) {
//    let n = 1;
//    let volume = Math.pow(n, 3);
//    while (volume < m){
//        n += 1;
//        volume += Math.pow(n, 3);
//        if (volume === m){
//            return n;
//        }
//    }
//    return (-1);
//}

function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n    //  ?/: == if/else
}


findNb(check_m);
