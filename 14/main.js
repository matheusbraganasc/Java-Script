function enésimaFibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return enésimaFibonacci(n - 1) + enésimaFibonacci(n - 2);
    }
}

console.log(enésimaFibonacci(10));