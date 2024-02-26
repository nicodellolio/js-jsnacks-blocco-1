let nString = prompt('Please insert a number')
let N = Number(nString)

let numbersToCube = []

// i=0
// while (i < N ) {
//     numbersToCube.push(i)
//     i++

//     let cubedNumber = [i] * [i] * [i]
//     console.log(cubedNumber);
// }

for (let i = 1; i < N; i++) {
    numbersToCube.push(i)
    
    let cubedNumber = [i] * [i] * [i]
    console.log(cubedNumber);
}




