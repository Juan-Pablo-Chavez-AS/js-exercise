function nBonacci(n, m) {
    let cache = Array(m).fill(0);
    if (n <= m) {
        cache[n - 1] = 1;
    }
    // for (let i = n; i < m; i++) {
    //     cache[i] = cache.slice(i - n, i).reduce((sum, val) => sum + val, 0);
    // }
    Array(m - n).fill().forEach((_, index) => {
        let actualIndex = index + n;
        // console.log(cache);
        // console.log(cache.slice(actualIndex - n, actualIndex));
        cache[actualIndex] = cache.slice(actualIndex - n, actualIndex).reduce((sum, val) => sum + val, 0);
    });

    return cache[m - 1];
}

console.log(nBonacci(2, 6));
console.log(nBonacci(3, 7));
