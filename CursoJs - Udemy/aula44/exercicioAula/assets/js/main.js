const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { // se peso que é true com ! === false (NaN, 0, '', undefined....)
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    
    setResultado(msg, true);

});
// o escopo onde addEventListener foi definido é o mesmo escopo de setResultado, por isso deu certo mesmo que eu adicionei o argumento de msg dentro de addEventListener

function setResultado(msg, isValid) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const paragrafo = criaParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}

function getImc (peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau1', 'Obesidade grau2', 'Obesidade grau3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1]; // só uma ação de if, não precisa de chaves.
    if (imc < 18.5)  return nivel[0];
}


function criaParagrafo () {
    const paragrafo = document.createElement('p');
    return paragrafo;
}
