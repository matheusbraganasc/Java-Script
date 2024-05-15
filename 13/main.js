function armstrong(n) {
    let armstrong = 0;
    for (let i = 0; i < n; i++) {
        armstrong += Math.pow(i, 3);
    }
    return armstrong;
}

console.log(armstrong(1000));