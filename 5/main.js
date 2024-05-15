function vogais(palavra) {
    let vogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u') {
            vogais++;
        }
    }
    return vogais;
}

console.log(vogais('ola'));