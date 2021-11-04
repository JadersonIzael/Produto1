function createTag(element) {
    return document.createElement(element);
}

let title = document.querySelector("section h1");
title.textContent = "table of products";

let table = document.getElementById("productsTable");

let thead = createTag("thead");
let tbody = createTag("tbody");
let tfoot = createTag("tfoot");

let tableIndices = ["#", "ID", "Codigo", "Descricao", "Estoque", "Preco"];
let lineHead = createTag("tr");

function createCell(tag, text) {
    tag = createTag(tag);
    tag.textContent = text;
    return tag;
}

for (let j = 0; j < tableIndices.length; j++) { 
    let th = createCell("tr", tableIndices[j]);
    lineHead.appendChild(th);
}
thead.appendChild(lineHead);

let bodyLine = '';
let cel = '';

for (let j = 0; j < tableLines.length; j++) {

    bodyLine = createTag("tr");
    bodyLine.appendChild(createCell("td", (j + 1)));

    for (let i = 0; i < tableLines[j].length; i++) {

        cel = createCell("td", tableLines[j][i]);
        bodyLine.appendChild(cel);
    }

    tbody.appendChild(bodyLine);
}

table.appendChild(thead);
table.appendChild(tbody);
table.appendChild(tfoot);