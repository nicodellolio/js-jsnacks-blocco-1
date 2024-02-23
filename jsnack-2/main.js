// console.log('Yes, it works');

/*
tools:
-prompt
-log
-if/else
-innerHTML
*/

// chiediamo all'utente i numeri attraverso il prompt
let word1 = prompt('Please type the first word')
let word2 = prompt('Please type the second word')

// creiamo le condizioni per decidere quale stampare per prima

if (word1.length > word2.length) {
    console.log(`word1 is longer then word2`);
    document.getElementById('title').innerHTML = (`The first word is longer then the second word`)
} else if (word2.length > word1.length){
    console.log(`word2 is longer then word1`);
    document.getElementById('title').innerHTML = (`The second word is longer then the first word`)
} else if (word1.length === word2.length){
    console.log(`word1 and word2 have the same length`);
    document.getElementById('title').innerHTML = (`The two words have the same length`)
} else {
    document.getElementById('title').innerHTML = (`Please try again`)
}
