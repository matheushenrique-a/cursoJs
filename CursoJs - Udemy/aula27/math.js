let num1 = 9.4999999999999999;
let num2 = Math.floor(num1);
console.log(num2);
num2 = Math.ceil(num1);
console.log(num2);
num2 = Math.round(num1);
console.log(num2);

console.log(
  `maior número da sequencia Math.max(1,2,3,4,5,6,1150,-1150,-54651641,254,7,8,9,10): ${Math.max(
    1,
    2,
    3,
    4,
    5,
    6,
    1150,
    -1150,
    -54651641,
    254,
    7,
    8,
    9,
    10
  )}`
);
console.log(
  `menor número da sequencia Math.min(1,2,3,4,5,6,1150,-1150,-54651641,254,7,8,9,10): ${Math.min(
    1,
    2,
    3,
    4,
    5,
    6,
    1150,
    -1150,
    -54651641,
    254,
    7,
    8,
    9,
    10
  )}`
);

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000, -1000];
console.log(Math.max(...lista));

console.log(Math.random());
console.log(Math.random() * 5 + 5);

console.log(Math.pow(8, 1/3));
console.log(8 ** (1/3));


