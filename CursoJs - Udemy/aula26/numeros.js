let num1 = 783;
console.log(num1.toString(16));

let num2 = 76.84597;
console.log(num2.toFixed(2));
console.log(Number.isInteger(num2), Number.isNaN(num1 * '5'), Number.isNaN(num1 * 'ola'));

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;

console.log(num3);
console.log(Number(num3.toFixed(1)));

let num5 = 0.7;
let num6 = 0.1;
num5 = ((num5 * 100) + (num6*100)) / 100;
console.log(num5);