function createTableList(productList = []) {

    for (let index = 0; index < productList.length; index++) {
        createTableLine(productList[index]);
    }
} 


function createTableLine(product) {
    
    var productBodyTable = document.getElementById("productBodyTableId");
    var trBody = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdCode = document.createElement('td');
    let tdDescription = document.createElement('td');
    let tdAmount = document.createElement('td');
    let tdValue = document.createElement('td');
    let tdDelete = document.createElement('td');
    let tdDetails = document.createElement('td');
    let tdUpdate = document.createElement('td');


    let productId = document.createTextNode(product.id);
    let productCode = document.createTextNode(product.code);
    let productDescription = document.createTextNode(product.description);
    let productAmount = document.createTextNode(product.amount);
    let productValue = document.createTextNode(product.value);
    

    let textDelete = document.createTextNode('Deletar');
    let buttonDelete = document.createElement('button');
    let textDetails = document.createTextNode('Detalhes');
    let buttonDetails = document.createElement('button');
    let textUpdate = document.createTextNode('Editar');
    let buttonUpdate = document.createElement('button');    

    tdId.setAttribute('id', 'productId' + product.id);

    buttonDelete.setAttribute('onclick', "deleteById($event)");

    buttonDelete.setAttribute('class', 'btn-Delete');
    buttonDetails.setAttribute('class', 'btn-Details');
    buttonUpdate.setAttribute('class', 'btn-Edit');



    buttonDelete.addEventListener('click', function (event) {

        if (window.confirm("Voce deseja realmente DELETAR essa linha?")) {
            deleteById(product.id);
            document.location.reload(true);
        }
        else {
            document.location.reload(true);
            
        }
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


    buttonUpdate.addEventListener('click', function (event) {
        
        let editProductId = document.getElementById("editId");
        editProductId.innerText = product.id;

        let detailsProductCode = document.getElementById("editCodeId");
        detailsProductCode.value = product.code

        let detailsProductAmount = document.getElementById("editAmountId");
        detailsProductAmount.value = product.amount

        let detailsProductValue = document.getElementById("editValueId");
        detailsProductValue.value = product.value

        let detailsProductDescription = document.getElementById("editDescriptionId");
        detailsProductDescription.value = product.description

        $("#modalUpdateId").modal();

    }, false);

    buttonDelete.appendChild(textDelete);
    buttonDetails.appendChild(textDetails);
    buttonUpdate.appendChild(textUpdate);

    tdId.appendChild(productId);
    tdCode.appendChild(productCode);
    tdDescription.appendChild(productDescription);
    tdAmount.appendChild(productAmount);
    tdValue.appendChild(productValue);
    tdDelete.appendChild(buttonDelete);
    tdDetails.appendChild(buttonDetails);
    tdUpdate.appendChild(buttonUpdate);

    tdDescription.setAttribute('class', 'tdDescription');

    trBody.appendChild(tdId);
    trBody.appendChild(tdCode);
    trBody.appendChild(tdDescription);
    trBody.appendChild(tdAmount);
    trBody.appendChild(tdValue);
    trBody.appendChild(tdDelete);
    trBody.appendChild(tdDetails);
    trBody.appendChild(tdUpdate);

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

$(document).ready(function () {
    $("#btnCallModalUpdateId").click(function () {
        $("#modalUpdateId").modal();
    });
});

$(document).ready(function () {
    $("#btnTestId").click(function () {
        $("#modalTestId").modal();
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