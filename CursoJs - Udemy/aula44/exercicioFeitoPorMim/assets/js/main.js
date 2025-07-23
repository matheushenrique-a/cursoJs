const peso = document.querySelector("#input-teste-1");
const altura = document.querySelector("#input-teste-2");
const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");

form.addEventListener("submit", function recebeEventoForm(evento) {
  evento.preventDefault();

  const valuePeso = peso.value.trim();
  const valueAltura = altura.value.trim();

  if (valuePeso.includes(",")) {
    valuePeso = valuePeso.replace(",", ".");
  }

  if (valueAltura.includes(",")) {
    valueAltura = valueAltura.replace(",", ".");
  }

  const numPeso = Number(valuePeso);
  const numAltura = Number(valueAltura);

  if (!numPeso || !numAltura) {
    resultado.innerHTML = "Preencha os campos corretamente!";
    resultado.style.background = "#ccc";
    resultado.style.display = "block";
    return;
  }

  const formulaIMC = (numPeso) / (numAltura ** 2);
  const formulaFormatada = formulaIMC.toFixed(2);

  if (formulaIMC < 18.5) {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Abaixo do Peso)`;
    resultado.style.background = "#6FCF97";
  } else if (formulaIMC <= 24.9) {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Peso Normal)`;
    resultado.style.background = "#27AE60";
  } else if (formulaIMC <= 29.9) {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Sobrepeso)`;
    resultado.style.background = "#F2C94C";
  } else if (formulaIMC <= 34.9) {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Obesidade Grau 1)`;
    resultado.style.background = "#F2994A";
  } else if (formulaIMC <= 39.9) {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Obesidade Grau 2)`;
    resultado.style.background = "#EB5757";
  } else {
    resultado.innerHTML = `Seu IMC é ${formulaFormatada} (Obesidade Grau 3)`;
    resultado.style.background = "#9B51E0";
  }

  resultado.style.display = "block";
});
