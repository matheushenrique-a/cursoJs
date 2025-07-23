/* 
false: valor literal
FALSY values: 0, strings vazias ('' "" ``), null/undefined, NaN;
 */

console.log('Luiz' && true && 'Maria'); // quando todas as opções são verdadeiras, operação com && retorna o último valor
console.log('Luiz' && 'Maria' && true);
console.log('Luiz' && NaN && 12 && null); // quando há valor false na operação &&, a operação termina no primeiro false e retorna o valor encontrado de false.

const executarAcao = '0'; 
const falaOi = () => executarAcao + 1; // sem chaves, return impícito.
console.log(executarAcao && falaOi()); // false && true, retorna valor (literal ou não) de false.

// OU (||) retorna o primeiro valor verdadeiro que for encontrado.
console.log(0 || 0 || false || null || undefined); // || precisa percorrer toda a operação para tentar encontrar um true. Como não encontrou, retorna o último false.

const corUsuario = 'azul';
const corPadrao = 'vermelho';
const cor = corUsuario || corPadrao; // se corUsuario for false, retorna corPadrao. Se corUsuario for true, operação retorna valor de corUsuario.
console.log(cor);

// && precisa percorrer toda a operação lógica para ter certeza de que há um false ou não. Por isso, se for tudo true, ele retornará o ultimo true.
// Já o ||, como ele só precisa de 1 true apenas, quando encontrá-lo, sua tarefa será concluída e retornará o valor true descoberto.