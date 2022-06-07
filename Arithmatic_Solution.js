// JavaScript source code
// Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c


// Random 3 Numbers
var num1 = Math.floor(Math.random() * 10);
console.log("Value of Random Number is " + num1);

var num2 = Math.floor(Math.random() * 40);
console.log("Value of Random Number is " + num2);

var num3 = Math.floor(Math.random() * 80);
console.log("Value of Random Number is " + num3);

// Arithmetic operations 
var first = (num1 + num2 * num3);
var second = (num1 % num2 / num3);
var third = (num3 + num1 / num2);
var fourth = (num1 * num2 + num3);

console.log("\nFirst equation answer is : " + first);
console.log("\nSecond equation answer is : " + second);
console.log("\nThird equation answer is : " + third);
console.log("\nFourh equation answer is : " + fourth);

// Minimum Number in result
if (first > second && first > third && first > fourth) {
    console.log("\nMinimum Number in result is  " + first);
}
else if(second > third && second > fourth) {
    console.log("\nMinimum Number in result is  " + second);
}
else if(third > fourth){
    console.log("\nMinimum Number in result is  " + third);
}
else {
    console.log("\nMinimum Number in result is "  + fourth);
}


// Maximum Number in result
if (first < second && first < third && first < fourth) {
    console.log("Maximum Number in result is  " + first);
}
else if (second < third && second < fourth) {
    console.log("Maximum Number in result is  " + second);
}
else if (third < fourth) {
    console.log("Maximum Number in result is  " + third);
}
else {
    console.log("Maximum Number in result is " + fourth);
}
