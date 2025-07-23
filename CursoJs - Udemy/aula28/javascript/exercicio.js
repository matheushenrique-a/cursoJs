let num = prompt("Digite um número");
let numNum = Number(num);

function validarNumero() {
  if (num === null) {
    alert("VOCÊ NÃO PODE CANCELAR!!!!!");
    location.reload();
    return;
  }
  

  if (num.includes(",") || num.includes(".")) {
    let virgulaF = num.lastIndexOf(",");
    let pontoF = num.lastIndexOf(".");
    if (virgulaF + 1 === num.length) {
      num = num.slice(0, virgulaF);
    } else if (pontoF + 1 === num.length) {
      num = num.slice(0, pontoF);
    }
  }

  if (num.includes(",") && num.includes(".")) {
    if (num.lastIndexOf(",") > num.lastIndexOf(".")) {
      num = num.replace(/\./g, ""); //para ponto, /\./g, se for /./, corresponde a qualquer caractere
      let virgula = num.lastIndexOf(",");
      num = num.slice(0, virgula) + "." + num.slice(virgula + 1); // replace cria uma nova string e precisa ser armazenado em algum lugar.... criar nova variável ou modificar a já existente. Replace só pega o primeiro caractere que vem
      num = num.replaceAll(",", "");
    } else {
      num = num.replace(/,/g, "");
      let ponto = num.lastIndexOf(".");
      num = num.slice(0, ponto) + "," + num.slice(ponto + 1);
      num = num.replaceAll(".", "");
      num = num.replace(",", ".");
    }
  } else if (num.includes(",")) {
    let virgula = num.lastIndexOf(",");
    num = num.slice(0, virgula) + "." + num.slice(virgula + 1);
    num = num.replaceAll(",", "");
  } else if (num.includes(".")) {
    let ponto = num.lastIndexOf(".");
    num = num.slice(0, ponto) + "," + num.slice(ponto + 1);
    num = num.replaceAll(".", "");
    num = num.replace(",", ".");
  }

  let num1 = Number(num);
  
  if (Number.isNaN(num1) === true || num === "") {
    alert("Isso não é um número. Por favor digite apenas números.");
    location.reload();
    return;
  }

  let corpo = document.body;

  
  corpo.innerHTML = `<h1 id="titulo">Seu número é: ${num1}</h1>`;
  corpo.innerHTML += `<div><p id="paragrafo"></p></div>`;
  let idTitulo = document.getElementById("titulo");
  let formatParagrafo = document.getElementById("paragrafo");
  idTitulo.innerHTML = `<strong>Seu número é: ${num1}</strong>`;
  formatParagrafo.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(num1)}</strong><br>`;
  formatParagrafo.innerHTML += `É inteiro: <strong>${Number.isInteger(num1)}</strong><br>`;
  formatParagrafo.innerHTML += `É Not a Number: <strong>${Number.isNaN(num1)}</strong><br>`;
  if (Number.isInteger(num1) === false) {
    formatParagrafo.innerHTML += `Arredondando pra baixo: <strong>${Math.floor(num1)}</strong><br>`;
    formatParagrafo.innerHTML += `Arredondando pra cima: <strong>${Math.ceil(num1)}</strong><br>`;
    formatParagrafo.innerHTML += `Duas casas decimais: <strong>${num1.toFixed(2)}</strong><br>`;
  }
}
validarNumero();

/*
if(num.includes(',') || num.includes('.')) {
    if (num.lastIndexOf(',') + 1 === num.length) {
        let virgulaF = num.lastIndexOf(',');
        num = num.slice(0, virgulaF);

    } else if (num.lastIndexOf('.') + 1 === num.length) {
        let pontoF = num.lastIndexOf('.');
        num = num.slice(0, pontoF);
    }
}
*/

// Eu usei lastIndexOf repetidas vezes, então eu posso apenas criar uma variável que indica a lastIndexOf antes da condição, evitando confusão no código

/*
document.body.innerHTML = `<strong style="font-size: 18px;">Seu número é: ${num1}</strong><br><br>`;
document.body.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(num1)}</strong><br>`;
document.body.innerHTML += `É inteiro: <strong>${Number.isInteger(num1)}</strong><br>`;
document.body.innerHTML += `É Not a Number: <strong>${Number.isNaN(num1)}</strong><br>`;
if (Number.isNaN(num1) === false && Number.isInteger(num1) === false) {
  document.body.innerHTML += `Arredondando pra baixo: <strong>${Math.floor(num1)}</strong><br>`;
  document.body.innerHTML += `Arredondando pra cima: <strong>${Math.ceil(num1)}</strong><br>`;
  document.body.innerHTML += `Duas casas decimais: <strong>${num1.toFixed(2)}</strong><br>`;
}
*/

/* 
const numero = prompt('Digite um Número:');
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

NESSE CASO, pode ser usado const pois não está reatribuindo o numeroTitulo, e sim modificando a propriedade HTML do objeto DOM que o numeroTitulo está apontando....
Certo: numeroTitulo."propriedadeQualquer" = tal coisa;
Errado: numeroTitulo = tal coisa;

/*
let titulo = document.createElement("h1");
titulo.setAttribute('id','titulo');
let idTitulo = document.getElementById('titulo');

let divNum = document.createElement("div");
divNum.setAttribute("id", "divNum"); // nesse caso, não preciso utilizar atribuição divNum = ... pois eu estou modificando sem retornar o valor, diferente do .replace, que muda e precisa ser retornado. Strings são imutáveis, quando usamos um método ela cria uma nova string e precisa substituir a outra reatribuindo o valor. Objetos DOM são mutáveis, não precisando de reatribuição pois alteram o próprio objeto

let paragrafo = document.createElement("p");
paragrafo.setAttribute("id", "paragrafo");
divNum.appendChild(paragrafo);

corpo.append(titulo, divNum);

let formatParagrafo = document.getElementById("paragrafo");
idTitulo.innerHTML = `<strong>Seu número é: ${num1}</strong>`;
formatParagrafo.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(
  num1
)}</strong><br>`;
formatParagrafo.innerHTML += `É inteiro: <strong>${Number.isInteger(
  num1
)}</strong><br>`;
formatParagrafo.innerHTML += `É Not a Number: <strong>${Number.isNaN(
  num1
)}</strong><br>`;
if (Number.isInteger(num1) === false) {
  formatParagrafo.innerHTML += `Arredondando pra baixo: <strong>${Math.floor(
    num1
  )}</strong><br>`;
  formatParagrafo.innerHTML += `Arredondando pra cima: <strong>${Math.ceil(
    num1
  )}</strong><br>`;
  formatParagrafo.innerHTML += `Duas casas decimais: <strong>${num1.toFixed(
    2
  )}</strong><br>`;
}
*/
