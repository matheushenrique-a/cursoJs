let umaString = 'Um "texto"';
console.log(umaString);

let umaString1 = `Um \\"texto"`; // para aparecer barra invertida, utilizar \\ para \
console.log(umaString1);

// strings são indexadas, ou seja, index = índice = posição!!!! Mas elas são imutáveis, não posso fazer umaString2[0] = 'x', que daria xol (imutáveis em todos os sentidos, adicionar, retirar, etc);
let umaString2 = "sol";
console.log(umaString2[1]);
console.log(umaString2.charAt(2));
console.log(umaString2.concat(" em um lindo dia."));

// transformar strings em array e depois alterar, usando .split(ONDE SEPARAR CADA ELEMENTO).
let umaString3 = "gato";
let trocaString3 = umaString3.split("");
trocaString3[0] = "r";
let aplicaString3 = trocaString3.join("");
console.log(aplicaString3);

// index
let umaString4 = "Um texto";
console.log(umaString4.indexOf("o", 5)); // começando pelo índice 5
console.log(umaString4.lastIndexOf("t", 7)) // da direita pra esquerda a partir do índice 7, vai dar 6 pois é até encontrar o primeiro "t".
console.log(umaString4.replace('Um', 'Outro'));

let umaString5 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString5.replaceAll('r', '#')); 
console.log(umaString5.replace(/r/g, '#')); // expressões de texto, flag g para aplicar em todos os r
console.log(umaString5.length);
console.log(umaString5.slice(2, 6)); // pega da posiçao 2 até a posição 5, pois 6 é desconsiderado. substring é usado para a mesma funcionalidade só que é pior.
console.log(umaString5.slice(30, 34)); // pega a index e subtrai por 5 e por 1
console.log(umaString5.split(" "));
console.log(umaString5.toUpperCase());
console.log(umaString5.toLowerCase()); 