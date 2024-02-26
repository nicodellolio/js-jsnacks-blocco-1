
const odd = [];

// i=0
// while (i < 6) {
//     let numberString = prompt('Please insert a number');
//     let number = Number(numberString)
//     i++

//     if(number % 2!=0) {
//         odd.push(number)
//     }
// }
// console.log(odd);


for (let i = 0; i < 6 ; i++) {
    let numberString = prompt('Please insert a number');
    let number = Number(numberString)

    if(number % 2!=0) {
        odd.push(number)
    }
}

console.log(odd);