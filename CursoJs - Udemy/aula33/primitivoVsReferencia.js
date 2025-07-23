// Primitivos são imutáveis. string, number, null, boolean, undefined, bigint, symbol.

let a = 'A';
let b = a;
console.log(a, b);
a = 'Alterado';
console.log(a, b); // b fez uma cópia da situação de a naquele momento. Como primitivo é imutável, a reatribuição só foi feita no a.

// Referência são mútaveis. array, object, function
let c = [1, 2, 3];
let d = c;
console.log(c, d);
c.push(4);  
console.log(c, d); // tanto d quanto c têm a mesma referência, que é o array em si. Como eles apontam pro mesmo local da memória, a alteração afetará as duas variáveis.
d.pop();
console.log(c, d);

let e = [1, 2, 3];
let f = [...e]; //utiliza-se spread [...array] para de fato copiar um valor referência.
e.push('Nome');
console.log(e, f);

const g = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const h = {...g};
g.nome = 'João';
console.log(g);
console.log(h);