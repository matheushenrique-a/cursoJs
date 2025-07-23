const inputTeste3 = document.getElementById("input-teste-3"); //inputs não tem innerHTML, apenas trocar os value.

function completarEmail() {
  let a = inputTeste3.value.trim(); //trim limpa os espaços
  const qtsArroba = a.split('@').length;  // se houver mais de um @, o array criado pelo split vai ter pelo menos 3 elementos. Então, se length -1 que será pelo menos dois for maior do que 1 (length padrão 2 menos 1 = 1), então tem mais de um @
  if (qtsArroba > 2) {
    alert('Você tem mais de um @');
    inputTeste3.value = a.split('@')[0] + '@gmail.com'; // joao@@gmail.com   ['joao', "", 'gmail.com] @@ tem vazio que é contado entre eles a.split('@)[0] == 'joao'; 'joao' + '@gmail.com' == joao@gmail.com
    return;
  }

  if (a && !a.endsWith("@gmail.com")) { // negação a."terminaCom". ou seja, se a não terminar com @gmail.com
    const nome = a.split('@')[0];
    inputTeste3.value = nome + "@gmail.com";
    alert('Só aceitamos @gmail.com');
  }
}
