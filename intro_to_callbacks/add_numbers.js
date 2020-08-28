const readLine = require('readline');
const reader = readLine.createInterface( {
    input: process.stdin,
    output: process.stdout,
    terminal: false
} ) 

function addNumbers(sum = 0, numsLeft, completionCB) {
    if (numsLeft === 0) {
        reader.close();
        return completionCB(sum);
    }
    reader.question( "please enter a number: ", num => {
        let number = parseInt(num);
        sum += number; 
        console.log(sum);
        numsLeft--;
        addNumbers(sum, numsLeft, completionCB);
    }) 
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));