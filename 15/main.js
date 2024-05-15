function pangrama(palavra) {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < letras.length; i++) {
        if (palavra.indexOf(letras[i]) == -1) {
            return false;
        }
    }
    return true;
}

console.log(pangrama('The quick brown fox jumps over the lazy dog.'));