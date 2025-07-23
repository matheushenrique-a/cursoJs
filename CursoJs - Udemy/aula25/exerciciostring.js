const nome = prompt('Digite o seu nome');
let Nome = nome.replaceAll(' ', '');

document.body.innerHTML = `Seu nome é: ${nome}.<br />`;
document.body.innerHTML += `Seu nome tem ${Nome.length} letras.<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: "${nome[1]}".<br />`;
document.body.innerHTML += `O índice do primeiro "a" do seu nome é: ${nome.indexOf("a", 0)}.<br />`;
document.body.innerHTML += `O índice do último "a" do seu nome é: ${nome.lastIndexOf("a")}.<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}.<br />`;
document.body.innerHTML += `As palavras do seu nome são, em array: ${nome.split(" ")}.<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}.<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}.<br />`;
