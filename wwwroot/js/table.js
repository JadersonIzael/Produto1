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
    let tdDetails = document.createElement('td');

    let productId = document.createTextNode(product.id);
    let productCode = document.createTextNode(product.code);
    let productDescription = document.createTextNode(product.description);
    let productAmount = document.createTextNode(product.amount);
    let productValue = document.createTextNode(product.value);

    let textDelete = document.createTextNode('Deletar');
    let buttonDelete = document.createElement('button');
    let textDetails = document.createTextNode('Detalhes');
    let buttonDetails = document.createElement('button');

    tdId.setAttribute('id', 'productId' + product.id);

    buttonDelete.setAttribute('onclick', "deleteById($event)");
    buttonDelete.addEventListener('click', function (event) {
        deleteById(product.id);

    }, false);

    buttonDetails.setAttribute('onclick', "get($event)");
    buttonDetails.addEventListener('click', function (event) {

        let detailsProductId = document.getElementById("detailsProductId");
        detailsProductId.innerText = product.id

        let detailsProductCode = document.getElementById("detailsProductCode");
        detailsProductCode.innerText = product.code

        let detailsProductAmount = document.getElementById("detailsProductAmount");
        detailsProductAmount.innerText = product.amount

        let detailsProductValue = document.getElementById("detailsProductValue");
        detailsProductValue.innerText = product.value

        let detailsProductDescription = document.getElementById("detailsProductDescription");
        detailsProductDescription.innerText = product.description

        $("#modalId").modal();

    }, false);


    buttonDelete.appendChild(textDelete)
    buttonDetails.appendChild(textDetails)

    tdId.appendChild(productId);
    tdCode.appendChild(productCode);
    tdDescription.appendChild(productDescription);
    tdAmount.appendChild(productAmount);
    tdValue.appendChild(productValue);
    tdDelete.appendChild(buttonDelete);
    tdDetails.appendChild(buttonDetails);

    trBody.appendChild(tdId);
    trBody.appendChild(tdCode);
    trBody.appendChild(tdDescription);
    trBody.appendChild(tdAmount);
    trBody.appendChild(tdValue);
    trBody.appendChild(tdDelete);
    trBody.appendChild(tdDetails);

    if (product.id >= 0) {
        productBodyTable.appendChild(trBody);
    }
    else {
        alert("Id nao encontrada!");
    }
}



//---------------------isso chama o modal-----------------------
$(document).ready(function () {
    $("#btnCallModalId").click(function () {
        $("#modalId").modal();
    });
});

//--------------------------------------------------------------------------------------------------



function createModalTableLine(product) {

    var productBodyModalTable = document.getElementById("productBodyModalTableId");

    var trModalBody = document.createElement("tr");

    let tdModalId = document.createElement('td');
    let tdModalCode = document.createElement('td');
    let tdModalDescription = document.createElement('td');
    let tdModalAmount = document.createElement('td');
    let Modal = document.createElement('td');

    let productModalId = document.createTextNode(product.id);
    let productModalCode = document.createTextNode(product.code);
    let productModalDescription = document.createTextNode(product.description);
    let productModalAmount = document.createTextNode(product.amount);
    let productModalValue = document.createTextNode(product.value);

    tdModalId.appendChild(productModalId);
    tdCModalode.appendChild(productModalCode);
    tdModalDescription.appendChild(productDescription);
    tdModalAmount.appendChild(productModalAmount);
    tdModalValue.appendChild(productModalValue);

    trModalBody.appendChild(tdModalId);
    trModalBody.appendChild(tdCModalode);
    trModalBody.appendChild(tdModalDescription);
    trModalBody.appendChild(tdModalAmount);
    trModalBody.appendChild(tdModalValue);


    productBodyModalTable.appendChild(trModalBody);
}