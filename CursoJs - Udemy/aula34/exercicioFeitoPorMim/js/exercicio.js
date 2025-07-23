let pessoaLista = [];
// capturar .value dentro da função, pois fora ela vai capturar no momento que o site carrega, então não terá nada.
function enviar() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade = document.getElementById('idade').value;
    let altura = document.getElementById('altura').value;
    const pessoaObjeto = {nome, sobrenome, idade, altura};
    pessoaLista.push(pessoaObjeto);
    let paragrafo = document.body;
    paragrafo.innerHTML += `<p>${nome} ${sobrenome} ${idade} ${altura}</p>`;
    nome = '';
    sobrenome = '';
    idade = '';
    altura = '';
}