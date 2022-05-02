// DE OPDRACHT DIE IK HEB MEEKREGEN IN PDF, ZIE assignments-js-fundamentals.pdf !
// DE OPDRACHT BEGINT HIERONDER, LECTURE: Values and Variables

const country = 'Nederland';
const continent = 'Europa';
let population = '17280000'
console.log(country);
console.log(continent);
console.log(population);
// DE OPDRACHT EINDE, LECTURE: Values and Variables

// DE OPDRACHT BEGINT HIERONDER, LECTURE: Data Types
const isIsland = false;
//let language; // deze verander ik in volgende opdracht naar const aangezien je de waarde niet mag aanpassen
console.log(isIsland);
console.log(population);
console.log(country);
// console.log(language);
// DE OPDRACHT EINDE, LECTURE: Data Types

// DE OPDRACHT BEGINT HIERONDER, LECTURE: let, const and var
const language = 'English'; // veranderd naar english voor logical operators
console.log(language);
// DE OPDRACHT EINDE, LECTURE: let, const and var

// DE OPDRACHT BEGINT HIERONDER, LECTURE: Basic Operators
console.log(population / 2, 'Half of population Netherlands');

console.log(population + 1, 'Population increased by one')

const finlandPopulation = 6000000;
const comparePopulationFinland = population > finlandPopulation;
console.log('Is Netherlands population bigger than Finland:',comparePopulationFinland);

const averagePopulation = 33000000;
const comparePopulationAverage = population < averagePopulation;
console.log('Does Netherlands have less people than average:', comparePopulationAverage);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// DE OPDRACHT EINDE, LECTURE: Basic Operators

// DE OPDRACHT BEGINT HIERONDER, LECTURE: Strings and Template Literals
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// DE OPDRACHT EINDE, LECTURE: Strings and Template Literals

// DE OPDRACHT BEGINT HIERONDER, LECTURE: Taking Decisions: if / else Statements
const average = 33000000
if(population >= average) {
    console.log("Netherlands's population is above average");
} else {
    console.log(`Netherlands population is ${average-population} below average`);
}
// DE OPDRACHT EINDE, LECTURE: Taking Decisions: if / else Statements

// DE OPDRACHT BEGINT HIERONDER, LECTURE: : Type Conversion and Coercion
// '9' - '5'; = 4, omdat strings worden omgezet naar nummers
// '19' - '13' + '17'; = 617, omdat uitkomst 6 in string is, en een nieuwe operator komt komt de 6 achter 17
// '19' - '13' + 17; = 23, omdat strings worden omgezet naar nummer
// '123' < 57; = NaN, ik denk dat deze niet geprint kan worden want je mixt string met number
// 5 + 6 + '4' + 9 - 4 - 2; = 117, omdat de 4 string is wordt het 114
console.log('9' - '5'); //goed
console.log('19' - '13' + '17'); //goed
console.log('19' - '13' + 17); //goed
console.log('123' < 57); //fout, Hier word dus netjes de strings omgezet in nummers
console.log(5 + 6 + '4' + 9 - 4 -2); //fout, 5+6 word voor 4 aangeplakt, 9-4-2 wordt achter 4 geplakt
// Ik heb geleerd van mijn fouten, ik liep hier namelijk vaker tegen aan.
// DE OPDRACHT EINDE, LECTURE: Type Conversion and Coercion

// DE OPDRACHT BEGINT HIERONDER, LECTURE:  Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('Hoeveel burenlanden hebben wij lan')); // zet ik uit omdat de code in de weg staat
// if (numNeighbours === 1) {
//     console.log('Dit is fout');
// } else if (numNeighbours === 2) {
//     console.log('Slimme jongen echt waar');
// } else  {
//     console.log('Geen grenzen niffauw')
// } // Dus eigenlijk wil je ten aller tijden strict operators gebruiken, om bugs te
  // voorkomen, vergeet niet om aan te geven dat we met numbers werken in prompt.
// DE OPDRACHT EINDE, LECTURE: Equality Operators: == vs. ===

// DE OPDRACHT BEGINT HIERONDER, LECTURE:   Logical Operators
if (language === 'English' && population<=50000000 && !isIsland) {
    console.log("Your perfect country");
} else {
    console.log("Look for another country");
}
// DE OPDRACHT EINDE, LECTURE: Logical Operators

// DE OPDRACHT BEGINT HIERONDER, LECTURE: The switch Statement
switch (language) {
    case 'chinese or mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English': // ik zet hem als hoofdlettter zodat mijn const word opgeroepen
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('great language too :D')
        break;
}
// DE OPDRACHT EINDE, LECTURE: The switch Statement

// DE OPDRACHT BEGINT HIERONDER, LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
)
// DE OPDRACHT EINDE, LECTURE: The Conditional (Ternary) Operator