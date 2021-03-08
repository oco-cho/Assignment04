//STEP 1
function halfNumber(x) {
    let result = Number(x/2);
    console.log('Half of ' + x + ' is ' + result + '.');
    return result;
}

document.write(halfNumber(5) + '<br>');


//STEP 2
function squareNumber(x) {
    let result = Number(x * x);
    console.log('The result of squaring the number ' + x + ' is ' + result + '.');
    return result;
}

document.write(squareNumber(3) + '<br>');


//STEP 3
function percentOf(a, b) {
    let result = Number((a/b)*100);
    console.log(a + ' is ' + result + '% of ' + b + '.');
    return result;
}

document.write(percentOf(2, 4) + '%' + '<br>');


//STEP 4
function findModulus(c, d) {
    let result = Number(c%d);
    console.log(result + ' is the modulus of ' + c + ' and ' + d +'.');
    return result;
}

document.write(findModulus(10, 4) + '<br>');


//STEP 5
let num = prompt('Let\'s add! Enter the five numbers you want to add separated by commas.');
let sum = 0;
let findComma;
let i = 0;
let count = 1;

function calc(x) {
    do {
        findComma = x.indexOf(",", i);
        sum += Number(x.substring(i, findComma));
        i = findComma + 1;
        count++;
    } while (count <= 4 );
    if (count === 5) {
        sum += Number(x.substring(i, x.length));
    }
    if (isNaN(sum)) {
        alert('Invalid entry. Please enter 5 numbers separated by commas.');
    } else {
    alert('The total is ' + sum + '.');
    }
    return sum;
}

document.write(calc(num));

/*
//SIDE NOTE: much simpler to do this, no??? :)

let num = prompt('Let\'s add! Enter all of the numbers you want to add separated by commas.');

function calc(z) {
    let newString = z.replace(/,/g, "+");
    return (eval(newString));
}

document.write(calc(num));
*/
