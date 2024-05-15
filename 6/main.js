function ordemInversa(palavra) {
    let novaPalavra = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        novaPalavra += palavra[i];
    }
    return novaPalavra;
}

console.log(ordemInversa('buenos dias'))