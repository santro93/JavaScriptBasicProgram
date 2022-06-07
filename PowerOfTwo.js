var num = Math.floor(Math.random() * 10 + 1);
console.log("Entered Number to find power of 2 is "+num);

for (var i = 1; i <= num; i++) {
	console.log("2 ^ "+ i +" = " +(2 ** i));
}