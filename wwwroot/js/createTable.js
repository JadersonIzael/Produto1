

function createTableLine(product) {

    let productTableHeader = document.getElementById("productTableHeaderId");

    //Cria tags
    var trHead = document.createElement("tr");
    var thId = document.createElement("th");
    var thCode = document.createElement("th");
    var thDescription = document.createElement("th");
    var thAmount = document.createElement("th");
    var thValue = document.createElement("th");

    //Cria info do TH
    let productIdHeader = document.createTextNode('Id');
    let productCodeHeader = document.createTextNode('Code');
    let productDescriptionHeader = document.createTextNode('Description');
    let productAmountHeader = document.createTextNode('Amount');
    let productValueHeader = document.createTextNode('Value');

    //Acrescenta um dentro do outro
    thId.appendChild(productIdHeader);
    thCode.appendChild(productCodeHeader);
    thDescription.appendChild(productDescriptionHeader);
    thAmount.appendChild(productAmountHeader);
    thValue.appendChild(productValueHeader);


    trHead.appendChild(thId);
    trHead.appendChild(thCode);
    trHead.appendChild(thDescription);
    trHead.appendChild(thAmount);
    trHead.appendChild(thValue);

    productTableHeader.appendChild(trHead);
}

