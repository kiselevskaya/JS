

//testing(calculateYears(1000, 0.05, 0.18, 1100), 3)
//testing(calculateYears(1000,0.01625,0.18,1200), 14)
//testing(calculateYears(1000,0.05,0.18,1000), 0)


function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal<desired){
        years += 1;
        principal += (principal*interest) - ((principal*interest)*tax);
    }
    return years;

//    let year = 0;
//    while (P < D && ++year) P += (P * I) - (P * I * T);
//    return year;

//return Math.ceil(
//    Math.log(desired / principal) /
//    Math.log(1 + interest * (1 - tax))
//  );
}

calculateYears(1000,0.05,0.18,1000);
