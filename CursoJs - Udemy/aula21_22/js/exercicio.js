let num1 = Number(prompt("digite um número"));
let num2 = Number(prompt("digite outro número"));
let resAd = num1 + num2;
let resSub = num1 - num2;
let resMult = num1 * num2;
let resDiv = num1 / num2;
let resTo = num1 % num2;

//Exercício

alert(`A soma é ${resAd}`);

/*
if (resSub.toString().length > 5) {
    alert(`A diferença é ${resSub.toFixed(2)}`);
} else {
    alert(`A diferença é ${resSub}`)
} 
*/
if (Number.isInteger(resSub)) {
  alert(`A diferença é ${resSub}`);
} else {
  alert(`A diferença é ${resSub.toFixed(2)}`);
}

/*
alert(`O produto é ${resMult}`);
*/

if (Number.isInteger(resMult)) {
  alert(`O produto é ${resMult}`);
} else {
  alert(`O produto é ${resMult.toFixed(2)}`);
}

/*
if (resTo === 0) {
  alert(`O quociente é ${resDiv}`);
} else {
alert(`O quociente é ${resDiv.toFixed(2)}`);
}
*/

if (Number.isInteger(resDiv)) {
  alert(`A diferença é ${resDiv}`);
} else {
  alert(`A diferença é ${resDiv.toFixed(2)}`);
}

/*
if (resTo.toString().length > 5) {
  alert(`O resto da divisão é ${resTo.toFixed(2)}`);
} else {
  alert(`O resto da divisão é ${resTo}`);
}
*/
if (Number.isInteger(resTo)) {
  alert(`A diferença é ${resTo}`);
} else {
  alert(`A diferença é ${resTo.toFixed(2)}`);
}