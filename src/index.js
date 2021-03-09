module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    let ans = "";
    while (n > 0) {
        ans += n % 10;
        n = Math.floor(n / 10);
    }
    return ans;
};
