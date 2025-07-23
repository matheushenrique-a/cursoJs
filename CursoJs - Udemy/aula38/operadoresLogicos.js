/* 
&& -> AND -> E  TODOS DEVEM SER TRUE PARA RETORNAR TRUE
|| -> OR -> OU  APENAS UM TRUE PARA RETORNAR TRUE
! -> NOT -> NÃO OPOSIÇÃO
 */
console.log(true && true && true && true && true && true && false);
console.log(true && true);
console.log(true || true);
console.log(true || false || false || false || false || false);
console.log(!true);
console.log(!false);
console.log(!!false); //negando a negação de false (!true)
console.log(typeof (true +[]));
console.log([1]+[2]); // operador + onde há array, ele vai transformar os resultados em string e fazer a concatenação