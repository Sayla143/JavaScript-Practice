//loop
   for(let count =1; count <=5; count++ ){
    console.log("sayla");
   }


//calculate sum of first 1 to n number.

let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + 1;// sum = 0+1

}
console.log("sum = ", sum);
console.log("loop has ended");





//while

let i = 0;
while (i <= 10){
    console.log("pako");
    i++;
}




//do while
let i = 1;
do {
    console.log("i=", i);
    i++;
}while (i <= 5);




//for of 
let str = "njshsj";
for(let i of str){
   console.log("i=",i) 
}
   

for (let num = 0; num <= 100; num++){
console.log("num =", num);
}





// pratice qs2

let gameNum = 25;
let userNum = prompt("guess the game number:");
while(userNum != gameNum){
userNun = prompt("you enter wrong number.guess the game number again:");
}
console.log("congratulations,you entered the right number");


