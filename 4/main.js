function palindromo(palavra) {
    if (palavra == palavra.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('oso'));