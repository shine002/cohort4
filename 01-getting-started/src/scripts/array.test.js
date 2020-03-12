import array from "./array.js"


test('Array test', () => {
    expect(array.createArray("test")).toEqual("Invalid Input");    
    expect(array.createArray(5)).toEqual("Input Added");
    expect(array.createArray(2)).toEqual("Input Added");
    expect(array.createArray("test")).toEqual("Invalid Input");
    expect(array.addArray()).toEqual(7);
    expect(array.createArray("")).toEqual("Invalid Input");
    expect(array.createArray("3")).toEqual("Input Added");
    expect(array.clearArray()).toEqual("Array Cleared");
    expect(array.showArray()).toEqual("Array is Empty");
    expect(array.createArray(9)).toEqual("Input Added");
    expect(array.createArray(4)).toEqual("Input Added");
    expect(array.createArray(4)).toEqual("Input Added");
    expect(array.showArray()).toEqual([9,4,4]);
    expect(array.addArray()).toEqual(17);

});
