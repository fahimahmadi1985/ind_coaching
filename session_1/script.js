//1- input
//2- process
//3- output

//definition
function sum(num1, num2) {
    let result =  num1 + num2
    sum(10, 50);
    return result;
}




//if wheather good print 'lets go outside'
//if wheather bad print 'lets stay at home'
let wheather = 'good';
let temp = -3;

//AND &&
//OR  ||

if (wheather === 'good' && temp > 15) {
    console.log('lets go outside.')
}
else if (wheather === 'bad' || temp < 0) {
    console.log('lets stay at home.')
}
else {
    console.log('i dont know what we should do.')
}

//let x = 5  assign value 5 to x
//x == y   2 == "2"   true    //value
//a === b  2 === "2"  false   //value and type
