function zeroData (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatarData (data) {
    const dia = zeroData(data.getDate());
    const mes = zeroData(data.getMonth());
    const ano = zeroData(data.getFullYear());
    const hora = zeroData(data.getHours());
    const min = zeroData(data.getMinutes());
    const seg = zeroData(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


const data = new Date();
const dataBrasil = formatarData(data);

console.log(dataBrasil);