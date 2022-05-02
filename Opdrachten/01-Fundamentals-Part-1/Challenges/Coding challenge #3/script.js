const dolphinsAverage = 96 + 108 + 89 / 3;
const koalasAverage = 88 + 91 + 110 / 3;
console.log("Dolphins Average =", dolphinsAverage,"Koalas Average =", koalasAverage);

if(dolphinsAverage === koalasAverage) {
    console.log("Draw game")
} else if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins have more points")
} else {
    console.log("Koalas have more points")
}

const dolphinsBonus1 = 97 + 112 + 101 / 3;
const koalasBonus1 = 109 + 95 + 123 / 3;
const minimumScore = 100;

if (dolphinsBonus1 >= minimumScore && koalasBonus1>=minimumScore) {
    if (dolphinsBonus1  === koalasBonus1) {
        console.log("Draw game");
    } else if (dolphinsBonus1  > koalasBonus1) {
        console.log("Dolphins have more points and passed min score");
    } else {
        console.log("Koalas have more points and passed min score");
    }
}

const koalasBonus2 = 109 + 95 + 106 / 3;

if (dolphinsBonus1 >= minimumScore && koalasBonus1>=minimumScore) {
    if (dolphinsBonus1  === koalasBonus2) {
        console.log("Draw game");
    } else if (dolphinsBonus1  > koalasBonus2) {
        console.log("Dolphins have more points and passed min score");
    } else {
        console.log("Koalas have more points and passed min score");
    }

}
