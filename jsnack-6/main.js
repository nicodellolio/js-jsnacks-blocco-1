let nString = prompt('Please insert a number')
let N = Number(nString)

let numbersToCube = []

i=1
while (i < N + 1) {
    numbersToCube.push(i)
    i++

    let cubedNumber = [i] * [i] * [i]
    console.log(cubedNumber);
}

// console.log(numbersToCube);


