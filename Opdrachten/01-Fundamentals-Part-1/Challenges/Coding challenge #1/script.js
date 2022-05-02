// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter)

// data 1
const markHeightd1 = 1.69;
const markWeightd1 = 78;
const johnHeightd1 = 1.95;
const johnWeightd1 = 92;

const markBMId1 = markWeightd1 / markHeightd1 ** 2;
const johnBMId1 = johnWeightd1 / (johnHeightd1 * johnHeightd1);
console.log(markBMId1, johnBMId1);

const markHigherBMId1 = markBMId1 > johnBMId1;
console.log('Does mark have more BMI than John? :', markHigherBMId1)

//data 2
const markHeightd2 = 1.88;
const markWeightd2 = 95;
const johnHeightd2 = 1.76;
const johnWeightd2 = 85;

const markBMId2 = markWeightd2 / markHeightd2 ** 2;
const johnBMId2 = johnWeightd2 / (johnHeightd2 * johnHeightd2);
console.log(markBMId2, johnBMId2);

const markHigherBMId2 = markBMId2 > johnBMId2;
console.log('Does mark have more BMI than John? :', markHigherBMId2)