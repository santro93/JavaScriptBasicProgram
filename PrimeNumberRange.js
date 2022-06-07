var lowerRange = 10;
var upperRange = 90;

for (var j = lowerRange; j <= upperRange; j++) {
    k = 0;
    for (var i = 2; i < j; i++) {
        if (j % i == 0) {
            k = 1;
            break
        }
    }
    if (k == 0) {
        console.log(""+i);
    }
}