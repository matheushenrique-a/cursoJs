let alunos = 'Luiz Maria João';
alunos = alunos.split(" ");
console.log(alunos);

let alunos1 = ['Luiz', 'Maria', 'João'];
console.log(alunos1[0][1]); // Array [indice0[indice1]]; Array[Luiz[u]]
alunos1[1] = 'jaklfçldk';
alunos1.push('mario', 'jflaç'); // adicionar ao final
alunos1.unshift('roberto', 'valdo'); // adiciona no inicio. Se for mais de um no parametro, adiciona como está no parametro. o primeiro sempre será o primeiro adicionado no argumento, no caso roberto
console.log(alunos1);

alunos1.pop(); // remove o último
alunos1.shift(); // remove o primeiro
delete alunos1[1]; // remove apenas o conteúdo, mantém índice
console.log(alunos1);
console.log(alunos1.slice(0 , 2)); // slice funciona da mesma forma quando é string. Quando é positivo, é sobre os indices e código pega e tira 1. Quando é negativo, é sobre o length -numero, e nao tira 1 do resultado final
console.log(alunos1 instanceof Array); // booleano que retorna se variável alunos1 é instância de um Array
console.log(Array.isArray(alunos1)); // mesma coisa
