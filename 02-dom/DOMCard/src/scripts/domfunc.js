
const functions = {

    buildCard(text) {

        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));

        const add = document.createElement('button');
        add.appendChild(document.createTextNode("Add After"));
        div.appendChild(add);

        const before = document.createElement('button');
        before.appendChild(document.createTextNode("Add Before"));
        div.appendChild(before);
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));

        const del = document.createElement('button');
        del.appendChild(document.createTextNode("Delete"));
        div.appendChild(del);

        return div;
    },

    addBefore(node, text) {
        const div = functions.buildCard(text);
        node.parentElement.insertBefore(div, node);
    },

    addAfter(node, text) {

        const div = functions.buildCard(text);
        node.after(div, node.nextSibling);
    },

    delCard(node) {
        node.parentElement.removeChild(node);
    },

};

export default functions;
