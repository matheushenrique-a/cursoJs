function saudacao(pessoa) {
  console.log(`Olá, ${pessoa}!`);
}

saudacao("ValdomiroHULTU");
saudacao("Jagori");

function bomDia(pessoa) {
  console.log(`Bom dia, ${pessoa}!`);
  return 4343;
}

const variavel = bomDia("ValdomiroHULTU");
console.log(variavel);

function boaNoite(pessoa) {
  return `Boa noite, ${pessoa}!`;
}

const noite = boaNoite("serjo");
console.log(noite);

function soma(x, y) {
  const resultado = x + y; // escopo dentro da função
  return resultado;
}
const resultado = soma(3, 6); // escopo global, área diferente da const resultado dentro da função. Dentro de escopo da função, se eu declarar let, const e var, se eu tentar exibir essa variável em outro escopo, não conseguirei. Mas, se eu utilizar var dentro de um escopo de bloco {} (tudo que usa {} menos function, pois ela recebe nome e é única, por isso comportamento especial), var escapa para o escopo global.
console.log(resultado);

if (1 + 1 === 2) {
  var resultados = 9;
}
console.log(resultados); // var vazou do bloco, o que não aconteceria se fosse let ou const

function soma2(x = 1, y = 1) {
  // atribui 1 para x e y para não gerar NaN se eu não atribuir valor quando invocar a função
  const resultado = x + y;
  return resultado;
}

const resultado2 = soma2(4);
console.log(resultado2);

//FUNÇÃO ANONIMA ABAIXO
const raiz = function(n) {
    return n ** 0.5;
}; // precisa de ; após } pois é uma atribuição de variável. 
 // {} sempre pede return para retornar o valor final do escopo da função

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(169));

//ARROW FUNCTION
const raiZ = (n) => {
    return n ** 0.5;
}; 

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(169));

// Quando há só um parâmetro e só uma linha de código dentro do bloco, pode retirar {}, () e return, se for ARROW FUNCTION
const raIZ = n =>  n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(169));