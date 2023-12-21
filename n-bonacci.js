
let cache = [];
const nBonacci = (n, m) => {
    cache = [...Array(m)].map((elem, i) => i < n - 1 ? 0 : false);
    cache[n - 1] = 1;
    console.log(cache, 'initial');
    return nBonacciHelper(n, m);
};
let count = 0;
const nBonacciHelper = (n, m) => {
    console.log('call:',count++, n, m);
    if (m < n - 1) return 0;
    if (cache[m - 1]) return cache[m - 1];

    console.log(cache, 'before');

    cache[m - 1] = cache.reduce((sum, elem, i) => { return sum + (i > (m - n - 1)) ? nBonacciHelper(n, i) : 0 }, 0);
    console.log(cache, 'after');
    return cache[m - 1];
}

console.log(nBonacci(3, 6));
