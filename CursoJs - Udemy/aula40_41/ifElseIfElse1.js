console.log(typeof Infinity);
const numero = 34;
if (numero >= 0 && numero <= 3) {
    console.log('Número está entre 0 e 3.');
} else if (numero <= 6) {
    console.log('Número está entre 4 e 6');
} else if (numero <= 9) {
    console.log('Número está entre 7 e 9');
} else if (numero === 10) {
    console.log(numero);
} else {
    console.log(Infinity);
}