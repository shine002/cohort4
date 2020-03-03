import array from "./array.js"


test('array check', () => {
    expect(array.createArray(1)).toEqual([1]);
    expect(array.createArray(2)).toEqual([1,2]);
    expect(array.createArray("test")).toEqual("Invalid Input");


});