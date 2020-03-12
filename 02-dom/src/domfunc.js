
const functions = {

    buildCard (text) {

        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));

        const add = document.createElement('button');
        add.appendChild(document.createTextNode("Add After"));
        div.appendChild(add);

        const before = document.createElement('button');
        before.appendChild(document.createTextNode("Add Before"));
        div.appendChild(before);

        const del = document.createElement('button');
        del.appendChild(document.createTextNode("Delete"));
        div.appendChild(del);

        return div;
    },

    addBefore(node, text) {
        // console.log(node);
        // console.log(node.parentElement);
        
        
        const div = functions.buildCard(text);
        node.parentElement.insertBefore(div,node);
    },

    addAfter (node, text) {

        const div = functions.buildCard(text);
        node.addAfter.insertBefore(div,node.nextSibiling);
    },
    
};

export default functions;
