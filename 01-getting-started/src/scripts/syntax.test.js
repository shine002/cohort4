import syntax from './syntax'

test('Is A Number?', () => {
    expect(syntax.numberTest("shine")).toBe(false);
    expect(syntax.numberTest(1)).toBe(true);
    });

test('Test if the string is hello', () => {
    expect(syntax.helloStringCheck("Hi")).toBe(false);
    expect(syntax.helloStringCheck("Hello")).toBe(true);
    });

test('AND logic check', () => {
    expect(syntax.andLogicCheck(1,0)).toBe(0);
    expect(syntax.andLogicCheck(1,1)).toBe(1);
    });






















// test('Is A Sring?', () => {
//     expect(syntax.stringTest(2)).toBe(false);
// });

// test('Is A Boolean', () => {
//     expect(syntax.booleanTest(false)).toBe(true);
// });
