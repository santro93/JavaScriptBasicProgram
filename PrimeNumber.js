var num = Math.floor(Math.random() * 100 + 2);
console.log("Value of Random Number is " + num);
let count = 0;

for (var i = 1; i <= num; i++) {
    if ((num%i) == 0) {
        count++;
        if (count > 2)
            break;
    }
}
if (count == 2) {
    console.log("Entered Number is Prime");
}
else {
    console.log("Entered Number is not Prime");
}