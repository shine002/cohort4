import tax from './tax'

test ('Tack calculation check',() => {
    expect(functions.taxCalculator(1)).toBe(.15); 
    expect(functions.taxCalculator(2)).toBe(.30);
    expect(functions.taxCalculator(50000)).toBe(7630.35);
    expect(functions.taxCalculator(100000)).toBe(18541.11);
    expect(functions.taxCalculator(150000)).toBe(31211.10);
    expect(functions.taxCalculator(250000)).toBe(61796.26);
});