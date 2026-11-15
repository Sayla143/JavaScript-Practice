function myFunction(){
   console.log("welcome to my life!");
   console.log("we are learning js");

}
myFunction();


//function-> 2 numbers,sun
function sum(x, y){
    s = x + y;
    console.log("before return");
    return s;

}
let val = sum(3,4);
console.log(val);



// Sum Function
function sum(a, b) {
    return a + b;
}

// Arrow Sum Function / modern js
const arrowSum = (a, b) => {
    console.log(a + b);
};

// Multiplication Function
function mul(a, b) {
    return a * b;
}

// Function Call
console.log(sum(10, 20));

arrowSum(10, 20);

console.log(mul(10, 20));


