function meuEscopo(){
    const form = document.querySelector('.form');
    
    //form.onsubmit = function(evento) {
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('foi envida');
    //};

    let contador = 1;
    function recebeEventoForm(evento) { //esse parametro é só para captura do resultado que vai dar na ação form.addEventListener('submit', recebeEventoForm); 
        evento.preventDefault();
        console.log(evento);
        console.log(`Não enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm); // se eu colocar recebeEventoForm(), com (), vai executar na hora e retornar o resultado, e vai dar erro pois retorna undeifned.
}
//quando acontece o submit, é instanciado pela classe Event(que é instanciada pela SubmitEvent), então herda todos os métodos e propriedades da classe. Então, método preventDefault() é do objeto recebido pelo evento.

function meuEscopoNovo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({
            nome, sobrenome, peso, altura
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`
        
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopoNovo();
