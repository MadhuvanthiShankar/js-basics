/* To make a faulty calculator using Javascript

This faulty Calculator does the following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times
*/

let random = Math.random()
console.log(random)
let a = prompt("Enter the first Number");
let c = prompt("Enter the operation");
let b = prompt("Enter the Second Number");


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",

}

if(random > 0.1){
    //perform the correct operation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    console.log(`The result is ${a} ${c} ${b}`)
}
else{
    //perform the wrong operation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
 