function multiploComum(a, b) {
    let maxDivisor = 1;
    for (let i = 2; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            maxDivisor = i;
        }
    }
    return maxDivisor;
}

console.log(multiploComum(10, 15));