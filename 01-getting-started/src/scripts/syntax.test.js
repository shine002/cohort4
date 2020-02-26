import syntax from './syntax'

<<<<<<< HEAD
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


=======
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
>>>>>>> 8e60b86615cefcb914aa482938cc3ee980acdccb
