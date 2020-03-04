import obj from './object.js'


test('Array test', () => {
    expect(obj.searchObj("MB")).toEqual("Manitoba");    
    expect(obj.searchObj("ab")).toEqual("Alberta"); 
    expect(obj.searchObj("xx")).toEqual("Invalid Input");
});