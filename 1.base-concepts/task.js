"use strict"

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const root1 = (-b + sqrtDiscriminant) / (2 * a);
        const root2 = (-b - sqrtDiscriminant) / (2 * a);
        return [root1, root2];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (
        typeof percent !== "number" ||
        typeof contribution !== "number" ||
        typeof amount !== "number" ||
        typeof countMonths !== "number"
    ) {
        return false;
    }
    const monthlyPercent = percent / 100 / 12;
    const creditBody = amount - contribution;
    const monthlyPayment =
        creditBody *
        (monthlyPercent +
            monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
    const totalPayment = monthlyPayment * countMonths;
    return Math.round(totalPayment * 100) / 100;
}