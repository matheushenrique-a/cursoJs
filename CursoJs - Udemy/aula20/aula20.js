let x = 0;
x--;
console.log("Incremento:", x);

let contador = 2;
contador += 3;
console.log("Contador++:", ++contador);

let passo = 4;
contador += passo;
console.log("Contardor += passo:", contador);

let u = 10;
function incrementar() {
  u++;
}
incrementar();
console.log("Função:", u);

//Converter string(número) para number(número): parseInt('string') para inteiro; parseFloat('string') para "fracionais" (com decimal); Number() converte tanto Int quanto Float...

function adicaoInt() {
    let num1 = 5;
    let num2 = '2';
    num2 = parseInt(num2);
    console.log("adicaoInt:", num1 + num2);
}

function adicaoFloat() {
    let num1 = 5;
    let num2 = '2.2';
    num2 = parseFloat(num2);
    console.log("adicaoFloat:", num1 + num2);
}

function adicaoModerna() {
    let num1 = '12';
    let num2 = '6.7';
    num1 = Number(num1);
    num2 = Number(num2);
    console.log("adicaoModerna:", num1 + num2);
}
console.log(adicaoInt());
console.log(adicaoFloat());
console.log(adicaoModerna()); //exibe o console.log da função, mas ela em si não retora dados, então o console.log externo se torna undefined, e os dois valores aparecem no output.... para evitar, trocar console.log de cada function para return...

function adicaoInt2() {
    let num1 = 5;
    let num2 = '2';
    num2 = parseInt(num2);
    return num1 + num2;
}

function adicaoFloat2() {
    let num1 = 5;
    let num2 = '2.2';
    num2 = parseFloat(num2);
    return num1 + num2;
}

function adicaoModerna2() {
    let num1 = '12';
    let num2 = '6.7';
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}
console.log("adicaoInt2 usando return na função:", adicaoInt2());
console.log("adicaoFloat2 usando return na função:", adicaoFloat2());
console.log("adicaoModerna2 usando return na função:", adicaoModerna2()); // sem undefined, mas poderia só invocar a função se eu só quiser exibir

adicaoInt();
adicaoFloat();
adicaoModerna(); //aparece no output, sem precisar do console.log... pois a função é invocada e o resultado já é exibido automaticamente