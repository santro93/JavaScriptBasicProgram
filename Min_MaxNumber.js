// JavaScript source code
let num1 = Math.floor(Math.random() * 1000 );
let num2 = Math.floor(Math.random() * 1000 );
let num3 = Math.floor(Math.random() * 1000 );
let num4 = Math.floor(Math.random() * 1000 );
let num5 = Math.floor(Math.random() * 1000 );

console.log("The 1st Random number is " +num1);
console.log("The 2nd Random number is " +num2);
console.log("The 3rd Random number is " +num3);
console.log("The 4th Random number is " +num4);
console.log("The 5th Random number is " +num5);

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
	console.log("The Maximum number is " + num1);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
	console.log("The Maximum number is " + num2);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
	console.log("The Maximum number is " + num3);
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
	console.log("The Maximum number is " + num4);
}
else {
	console.log("The Maximum number is " + num5);
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
	console.log("The Minimum number is " + num1);
}
else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
	console.log("The Minimum number is " + num2);
}
else if (num3 < num1 && num3 > num2 && num3 > num4 && num3 < num5) {
	console.log("The Minimum number is " + num3);
}
else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
	console.log("The Minimum number is " + num4);
}
else {
	console.log("The Minimum number is " + num5);
}
