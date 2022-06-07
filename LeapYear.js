// JavaScript source code

let year = 2004;
if (year > 999 && year < 10000) {
	if (year % 400 == 0 && year % 100 != 0 || year % 4 == 0) {
		console.log("Year is a leap year");
	}
	else {
		console.log("Year is not a leap year");
	}
}
else {
	console.log("Enter 4 Digit year");
}
