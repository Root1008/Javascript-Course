/*
let js = 'amazing';
console.log(10 + 10 + 10 - 2);

console.log('Jonas');
console.log('23');

let voorNaam = 'Johan';

console.log(voorNaam);
console.log(voorNaam);
console.log(voorNaam);

// let 3years = 3;
// deze code klopt niet, je mag namelijk geen nummer gebruiken -
// in het begin van een variable.

let person = 'jonas';
let PI = '3.141592653';

let mijnEersteBaan = 'koerier';
let mijnHuidigeBaan = 'ZZP';

console.log(mijnEersteBaan);

let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

jsIsFun = 'Verander deze var naar string ipv boolean';
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

// const geboorteJaar = 1999;
// geboorteJaar = 2000;

var job = 'coder';
job = 'docent';
// nooit var gebruiken

achterNaam = 'Whidie';
console.log(achterNaam);


const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2020;
console.log(ageJonas,ageSara);

console.log(ageJonas * 2, ageJonas /10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Lio';
const lastName = 'Oil';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x-- // x = x -1;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2019);

const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);

const firstName = 'Lio';
const job = 'builder';
const birthYear = 1999;
const year = 2021;

const lio = "I'm " + firstName + ', a ' + (year - birthYear) +
    ' years old ' + job + '!';
console.log(lio);

const lioNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(lioNew)

console.log(`just a regular string...`)

console.log('string with \n\
multiped lines yea cool gang shit\n\
another one')

console.log(`string
multiple lines wejow
antohere one with backticks`)

const age = 15;

if (age >= 18) {
    console.log('Sara kan beginnen met het behalen van haar rijbewijs');
} else {
    const yearsleft = 18- age;
    console.log(`Sara is te jong, wacht nog ${yearsleft} jaren`);
}

const birthYear = 1991;

let century;
if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Lio'));
console.log(typeof  NaN);

console.log(String(23), 23);

// Type coercion
console.log('I Am ' + 23 + 'Years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // dit is 11 want '1' is string en ander number, allebei wordt string snapje
n = n - 1;
console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lio'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log("Don't spend it all");
} else  {
    console.log('You should get a job');
}

let height = 0;
if (height) {
    console.log('Height defined');
} else {
    console.log('Height undefined');
}

const age = 18;
if (age === 18) console.log('Person is adult(strict)');
if (age == 18) console.log('Person is adult(loose)'); //deze nooit gebruiken

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool, 23 is an amazing number')
} else if (favourite === 7) {
    console.log('lucky number seven(7)')
} else if (favourite === 9) {
    console.log('rondo numba nine')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('why not 23');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Je mag rijden");
// } else {
//     console.log("Iemand anders moet rijden")
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
    console.log("Je mag rijden");
} else {
    console.log("Iemand anders moet rijden")
}
const day = 'monday';

switch (day) {
    case 'monday': // dag === maandag
        console.log('Plan je structuur');
        console.log('Ga naar coding meetup');
        break;
    case 'tuesday':
        console.log('Bereid videos voor');
        breka;
    case 'wensday':
    case 'thursday':
        console.log('schrijf vooreelden');
        break;
    case 'friday':
        console.log('Neem videos op');
        break;
    case 'saterday':
        console.log('geniet van weekend');
        break;
    case 'sunday':
        console.log('geniet van weekend');
        break;
    default:
        console.log('Geen dag gekozen');
}
 */
// ik sla Statements & Expressions over aangezien ik hier al bekend mee ben.

const age = 23;
age >= 18 ? console.log('ik kan alcohol drinken') :
    console.log('ik kan water drinken');

const drink = age >= 18 ? 'Wijn' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wijn';
} else {
    drink2 = 'Water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wijn' : 'Water'}`);