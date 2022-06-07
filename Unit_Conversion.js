// Write a program that takes User Inputs and does Unit Conversion of different Length units
//	1. Feet to Inch 3. Inch to Feet
//	2. Feet to Meter 4. Meter to Feet

// User to Select Option
let select = Math.floor(Math.random() * 4 + 1);
console.log("Enter \n1. for Feet to Inch. \n2. for Inch to Feet. \n3. for Feet to Meter. \n4. Meter to Feet. : " + "\nEntered value for Select Option is  "+ select);


// unit
let num1 = Math.floor(Math.random() * 1000);
console.log("Entered Value to Convert : " + num1);

switch (select) {
	case 1:
		var inch = (num1 * 12);
		console.log("Converted Value from Feet to Inch is :- " + inch);
		break;
	case 2:
		var feet = (num1 / 12);
		console.log("Converted Value from Inch to Feet is :- " + feet);
		break;
	case 3:
		var meter = (num1 * 3);
		console.log("Converted Value from Feet to Meter is :- " + meter);
		break;
	case 4: 
		var feet1 = (num1 / 3);
		console.log("Converted Value from Inch to Feet is :- " + feet1);
		break;
}