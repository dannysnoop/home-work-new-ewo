function countClapsUpTo(n) {
    if (n <= 0) return 0;

    let total = 0;
    let factor = 1; // 1, 10, 100, 1000...

    while (factor <= n) {

        let lower = n % factor;
        let current = Math.floor(n / factor) % 10;
        let higher = Math.floor(n / (factor * 10));

        // đếm cho 3, 6, 9
        for (let d of [3, 6, 9]) {

            if (current > d) {
                total += (higher + 1) * factor;
            } else if (current === d) {
                total += higher * factor + lower + 1;
            } else {
                total += higher * factor;
            }
        }

        factor *= 10;
    }

    return total;
}
