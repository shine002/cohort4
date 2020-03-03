import fahrenheit from './daily'

test('Celsius to Farenheit check', () => {
    expect(fahrenheit.convertToFahrenheit(10)).toBe(50);
    expect(fahrenheit.convertToFahrenheit(0)).toBe(32);

});