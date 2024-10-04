const year = 1997;
let isLeapYear = false;
//    (  False     &&  True (door !==) ) || False 
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    isLeapYear = true;
}


console.log(`the year ${year} is ${isLeapYear ? "a leap year" : " not a leap year"}`)
