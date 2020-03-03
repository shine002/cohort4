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

test('Person age out put', () => {
    expect(syntax.personAgeCheck({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"})).toBe(50);
    expect(syntax.personAgeCheck({firstName:"shine", age:30})).toBe(30);

});

test('undefined check', () => {
    expect(syntax.undefinedCheck(5)).toBe(false);
	expect(syntax.undefinedCheck(undefined)).toBe(true);

});

test("Add value to array test", () => {
    expect(syntax.addToEach([0, 1, 2, 3, 4], 1)).toEqual([1, 2, 3, 4, 5]);
    expect(syntax.addToEach([11, 15, 31, 35, 56], 5)).toEqual([16, 20, 36, 40, 61]);
    expect(syntax.addToEach([100, 200, 3, 55], 21)).toEqual([121, 221, 24, 76]);
});// while

test("Upper case test ", () => {
    expect(syntax.toUpperCaseArray(['shine', 'swajal', 'nicki'])).toEqual(['SHINE', 'SWAJAL', 'NICKI']);
    expect(syntax.toUpperCaseArray(['luke', 'kim', 'phil'])).toEqual(['LUKE', 'KIM', 'PHIL']);
});

test("Create array test", () => {
    expect(syntax.fillArray(8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(syntax.fillArray(0)).toEqual([]);
    expect(syntax.fillArray(3)).toEqual([0, 1, 2]);
});

test("The reduced numbers added up", () => {
    expect(syntax.reduce(1)).toBe(1);
    expect(syntax.reduce(10)).toBe(55);
    expect(syntax.reduce(100)).toBe(5050);
});