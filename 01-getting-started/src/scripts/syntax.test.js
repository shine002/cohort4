import syntax from './syntax'

test('Check if input is a number', () => {
    expect(syntax.isAnumber("Shine")).toBe(false);  
    expect(syntax.isAnumber(1)).toBe(true);
});

test('Is the string hello', () => {
    expect(syntax.isItHello("hi")).toBe(false);
    expect(syntax.isItHello("Hello")).toBe(true);
});

test('Test valid AND input', () => {
    expect(syntax.andLogicCheck(1,5)).toBe("Invalid Input");
    expect(syntax.andLogicCheck(true,true)).toBe(true);
    expect(syntax.andLogicCheck(true,false)).toBe(false);
    expect(syntax.andLogicCheck(false,false)).toBe(false);

});


