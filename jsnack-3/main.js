

const person = prompt('Please type your name and we will look for your name')

let gatsbyList = [
    'John Mayer',
    'Marta Mayer',
    'John Kransky',
    'Marcus Youth',
    'John Gotti',
    'jake Gillighan',
    'Philip Mayer',
    'Marco Materazzi',
]


for (let i = 0; i < gatsbyList.length; i++) {
    const invited = gatsbyList[i];
    console.log(invited);
}

if (gatsbyList.includes(person)) {
    console.log('Person allowed');
    document.getElementById('message').innerHTML = (`Welcome to Mr.Gatsb'sy Party`)
} else {
    console.log('Person not allowed');    
    document.getElementById('message').innerHTML = (`I am sorry, you are not allowed to get into Mr.Gatsby's Party`)
}


