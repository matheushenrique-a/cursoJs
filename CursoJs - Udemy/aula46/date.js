/* const tresHoras = 10800000;
const umDia = 3600000 * 24;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString()); */

// const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, min, seg, mseg
const data = new Date(Date.now());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundo', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - domingo, começa por domingo, dias são indexados também
console.log(data.toString());
console.log();