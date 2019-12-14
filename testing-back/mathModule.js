const solve = (a, b, c) => {
    if (a === 0) {
        if (b === 0)
            return [];
        return [-c / b];
    }

    const d = b * b - 4 * a * c;

    if (d < 0)
        return [];
    if (d === 0) {
        return [-b / (2 * a)];
    }

    return [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)];
};

module.exports = solve;
