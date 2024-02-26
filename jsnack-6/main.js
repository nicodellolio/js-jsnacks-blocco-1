let nString = prompt('Please insert a number')
let N = Number(nString)

let numbersToCube = []

i=0
while (i < N ) {
    numbersToCube.push(i)
    i++

    let cubedNumber = [i] * [i] * [i]
    console.log(cubedNumber);
}

// console.log(numbersToCube);


