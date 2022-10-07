var numbb = 0;
var count = 0;
for (numbb = 0; numbb <= 20; numbb++) {
    if (numbb % 2 == 0) {
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count); 