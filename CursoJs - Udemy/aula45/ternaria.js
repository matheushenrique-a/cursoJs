// ? :

const pontuacaoUsuario = 1234;
const vip = 1000;

/* if (pontuacaoUsuario >= vip) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário Normal");
} */

const nivelUsuario = pontuacaoUsuario >= vip ? "Usuario VIP" : "Usuário Normal";
console.log(nivelUsuario);