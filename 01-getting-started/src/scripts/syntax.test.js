import syntax from './syntax'

test('Check if input is a number', () => {
    expect(syntax.isAnumber("Shine")).toBe(false);  
    expect(syntax.isAnumber(1)).toBe(true);
});

test('Is the string hello', () => {
    expect(syntax.isItHello("hi")).toBe(false);
    expect(syntax.isItHello("Hello")).toBe(true);
});

test('Test valid AND i/o', () => {
    expect(syntax.ANDlogicCheck(1,5)).toBe("Invalid Input");
    expect(syntax.ANDlogicCheck(true,true)).toBe(true);
    expect(syntax.ANDlogicCheck(true,false)).toBe(false);
    expect(syntax.ANDlogicCheck(false,false)).toBe(false);

});

test('1st index check of an array', () => {
    expect(syntax.arrayIndexCheck([1,2,3,4,5,6,7])).toBe(2);
    expect(syntax.arrayIndexCheck(["cat","dog","deer","lion"])).toBe("dog");


});