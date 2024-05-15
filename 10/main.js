function numeroPalavras(palavra) {
    let contPalavras = 1;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == ' ') {
            contPalavras++;
        }
    }
    return contPalavras;
}

console.log(numeroPalavras('aonde estas la ubicado'));