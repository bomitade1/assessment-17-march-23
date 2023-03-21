//Transportation calculations

//declaring the variables that holds the input data, the integer and string type
let distance;
let dayOrNight;
let price =0


//decide which conditions of the task have to be checked.
function taxi () {
    if (dayOrNight === "day") {
        taxiRate = 0.79
    }else{
        taxiRate = 0.90
    }
    return taxiRate
}
if (distance<20) {
price = 0.70 + distance * taxiRate
}else if (price = distance>= 100) {
price = distance * 0.09
}else{
    price = distance * 0.06
}

console.log(' The price is:'+ '' + (price)+'NGN')


//Printing the Output Data
