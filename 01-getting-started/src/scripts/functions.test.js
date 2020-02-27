import functions from './functions'

// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("small"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("large");
// });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });

// test("Is the number even", () => {
//     expect(functions.isEven(2)).toBe(true);
//     expect(functions.isEven(1)).toBe(false);
// });

// Calculator part

test('Check if inputs is a number', () => {
    expect(functions.isAnumber("Shine",2)).toBe(false);  
    expect(functions.isAnumber(1,2)).toBe(true);
    expect(functions.isAnumber("Shine","x")).toBe(false); 
});

test ('Add check', () => {
    expect(functions.add(4,2)).toBe(6);   

});

test ('Subtract check', () => {
    expect(functions.subtract(4,2)).toBe(2);   
    expect(functions.subtract(2,-2)).toBe(4); 

});

test ('Mulitply check', () => {
    expect(functions.multiply(4,2)).toBe(8);   
    expect(functions.multiply(2,-2)).toBe(-4); 
});


test ('Divide check', () => {
    expect(functions.divide(4,2)).toBe(2);   
    expect(functions.divide(2,2)).toBe(1); 
});