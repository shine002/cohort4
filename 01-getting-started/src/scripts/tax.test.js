import {tax} from './tax'

test ('Tax calculation check',() => {
    expect(tax.taxCalculator(1)).toBe(.15); 
    expect(tax.taxCalculator(2)).toBe(.30);
    expect(tax.taxCalculator(50000)).toBe("7580.57");
    expect(tax.taxCalculator(100000)).toBe("17991.78");
    expect(tax.taxCalculator(150000)).toBe("30991.78");
    expect(tax.taxCalculator(250000)).toBe("61402.87");
});