const moneyCuts = [200, 100, 50, 20, 10, 5, 2, 1];

const combinationsQuantity = (amount, index = 0) => {
    console.log(amount, index);
    let combinations = 0;
    if (amount === 0) return 0;
    moneyCuts.slice(index).forEach((cut, i) => {
        if (cut <= amount) {
            combinations += 1;
            combinations += combinationsQuantity(amount - cut, i + index);
        }
    });
    return combinations;
};

console.log(combinationsQuantity(4));
// console.log(combinationsQuantity(5));

const bottomUpChange = (amount) => {
    let dp = [...Array(amount + 1)].map(() => 1); // it is always filled with 1s

    moneyCuts.reverse().slice(1).forEach((cut) => {
        // console.log(cut);
        for (let currentCutValue = cut; currentCutValue <= amount; currentCutValue++) {
            dp[currentCutValue] += dp[currentCutValue - cut];
            // console.log(dp.map((c, i) => {return {combs: c, money: i}}));
        }
    });

    // Return the total number of ways to form the 'amount' using the available denominations.
    return dp[amount];
}

console.log(bottomUpChange(4));
