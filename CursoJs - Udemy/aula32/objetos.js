function criarPessoa (nome, sobrenome, idade) { // parâmetro: informações necessárias
    return { nome, sobrenome, idade}; // objeto. Quando está em uma função, não precisa fazer nome: nome, sobrenome: sobrenome etc. JavaScript faz sozinho
}

const pessoa1 = criarPessoa('Homero', 'Junio', 58); // argumentos: aquilo que vai ser passado pro parâmetro
const pessoa2 = criarPessoa('Moreira', 'Siqueira', 65);

console.log(pessoa1.sobrenome, pessoa2.idade);

const pessoa3 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 56,

    falar() {
        console.log(`Olá, me chamo ${this.nome} ${this.sobrenome}! Tenho ${this.idade} anos.`);
    }, // tudo que tiver dentro de um objeto precisa ser separado por , no final do conteúdo de cada um

    incrementarIdade() {
        this.idade++;
    }
};

pessoa3.falar();
pessoa3.incrementarIdade();
pessoa3.falar();
pessoa3.incrementarIdade();
pessoa3.falar();
pessoa3.incrementarIdade();
pessoa3.falar();
