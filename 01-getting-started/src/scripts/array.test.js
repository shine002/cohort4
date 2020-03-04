import array from "./array.js"


test('array check', () => {
    expect(array.createArray(1)).toEqual("Input Added");
    expect(array.createArray(2)).toEqual("Input Added");
    expect(array.createArray("test")).toEqual("Invalid Input");
    expect(array.createArray("")).toEqual("Invalid Input");
});

test('Add array check', () => {
    expect(array.addArray()).toEqual(3);   
});


test('Add array check', () => {
    expect(array.showArray()).toEqual([1,2]);
    expect(array.showArray("")).toEqual("Array is Empty");

});