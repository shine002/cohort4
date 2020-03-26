import domfuncs from './domfunc'


test('Does the dom functions work?', () => {
    console.log("We are in the tests");
    const element = domfuncs.buildCard();
    expect(element).toBeTruthy();
});


test('Does the addBefore functions work?', () => {

    const group = document.createElement("div");
    const element = domfuncs.buildCard("First Insert");
    group.appendChild(element);
 
    
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    domfuncs.addBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0,11)).toBe(txt);
    expect(group.children[1].textContent.substr(0,12)).toBe("First Insert");

});