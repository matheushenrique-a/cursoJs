let varA = 'A';
let varB = 'B';
let varC = 'C';

let varAb = varA; // criei uma cópia, então se houver alteração futura, não vou perder o valor pois criei uma cópia e alterações não atualizam, é sempre leitura de cima pra baixo e considera o valor na situação atual, ou seja, se varA mudar, varAb não vai mudar pois na situação onde varAb foi adicionado, varA era 'A'.

varA = varB;
varB = varC;
varC = varAb;

console.log(varA, varB, varC);

// OU

let varD = 'D';
let varE = 'E';
let varF = 'F';

[varD, varE, varF] = [varE, varF, varD]; // No JavasCript, eu posso colocar variáveis dentro de um array, e ainda não preciso criar uma variável para o array em si, pois é uma lista temporária.... útil para trocar valores de variáveis de uma só vez
console.log (varD, varE, varF);
