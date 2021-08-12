function createTableList(productList = []) {
    for (let index = 0; index < productList.length; index++) {
        createTableLine(productList[index]);
    }
}

function createTableLine(product) {
    
    var productBodyTable = document.getElementById("productBodyTableId");

    var trBody = document.createElement("tr");

    let tdId = document.createElement('td');
    let tdCode = document.createElement('td');
    let tdDescription = document.createElement('td');
    let tdAmount = document.createElement('td');
    let tdValue = document.createElement('td');
    let tdDelete = document.createElement('td');

    let productId = document.createTextNode(product.id);
    let productCode = document.createTextNode(product.code);
    let productDescription = document.createTextNode(product.description);
    let productAmount = document.createTextNode(product.amount);
    let productValue = document.createTextNode(product.value);

    let textDelete = document.createTextNode('Deletar');
    let buttonDelete = document.createElement('button');

    tdId.setAttribute('id', 'productIdToDelete');
    buttonDelete.setAttribute('onclick', "deleteById($event)");
    buttonDelete.addEventListener('click', function () {

        var productId = document.getElementById('productIdToDelete');
        productId = productId.innerText;
        deleteById(productId);

    }, false);

    buttonDelete.appendChild(textDelete)

    tdId.appendChild(productId);
    tdCode.appendChild(productCode);
    tdDescription.appendChild(productDescription);
    tdAmount.appendChild(productAmount);
    tdValue.appendChild(productValue);
    tdDelete.appendChild(buttonDelete);

    trBody.appendChild(tdId);
    trBody.appendChild(tdCode);
    trBody.appendChild(tdDescription);
    trBody.appendChild(tdAmount);
    trBody.appendChild(tdValue);
    trBody.appendChild(tdDelete);

    if (product.id >= 0) {
        productBodyTable.appendChild(trBody);
    }
    else {
        alert("Id nao encontrada!");
    }
}
