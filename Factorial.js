let factorial = 1;
let num = 5;
console.log("Entered a number is : " +num);

for (var i = num; i > 1; i--) {
    factorial = (factorial * i)
}

console.log("Factorial of num is = " + factorial);
