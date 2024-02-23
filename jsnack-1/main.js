// console.log('Yes, it works');

let num1 = prompt('Please type the first number');
// console.log(`Num1:` + num1);

let num2 = prompt('Please type the second number');
// console.log(`Num2:` + num2);

// decidiamo ora il numero maggiore

if (num1 > num2) {
    console.log(`Biggest number: ` + num1)
} else if (num2 > num1) {
    console.log(`Biggest number: ` + num2)
}
else {
    console.log(`The numbers are even`);
}