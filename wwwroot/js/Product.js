$(document).ready(async function () {
    document.getElementById("btnPost").addEventListener("click", async function () {
        let resp = await post();
    });
    document.getElementById("btnDelete").addEventListener("click", async function () {
        let resp = await deleteId();
    });
    document.getElementById("btnPut").addEventListener("click", async function () {
        let resp = await put();
    });
    document.getElementById("btnGet").addEventListener("click", async function () {
        let resp = await get();
        debugger
        createTableLine(resp.data);
    })
});

async function post() {
    await axios
        .post('Product/Post',
            params =  {
                Id: Number(document.getElementById("productId").value),
                Code: Number(document.getElementById("productCodeId").value),
                Description: document.getElementById("productDescriptionId").value,
                Amount: Number(document.getElementById("productAmountId").value),
                Value: Number(document.getElementById("productValueId").value)
            }
        ).then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });
    return rsp;
}

async function put() {
    await axios
        .put('Product/Put',
            params = {
                id: Number(document.getElementById("productId").value),
                code: Number(document.getElementById("productCodeId").value),
                description: document.getElementById("productDescriptionId").value,
                amount: Number(document.getElementById("productAmountId").value),
                value: Number(document.getElementById("productValueId").value)
            }
        ).then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });
    return rsp;
}

async function get() {
    let productId = Number(document.getElementById('productId')?.value);
    await axios
        .get('Product/' + productId)
        .then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });
    return rsp;
}
async function deleteId(){
    let productId = Number(document.getElementById('productId')?.value);
    await axios
        .delete('Product/' + productId)
        .then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });
    return rsp;
}


function createTableLine(product) {
    //debugger
    let productTable = document.getElementById("productTableId");

    //-------------------------------------------------------------------//
    //Cria tags
    var header = document.createElement("thead");
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

    header.appendChild(trHead);

    //Acrescenta na tabela
    productTable.appendChild(header);
    //-------------------------------------------------------------------//
    //Cria tags
    var body = document.createElement("tbody");
    var trBody = document.createElement("tr");
    let tdId = document.createElement('td');
    let tdCode = document.createElement('td');
    let tdDescription = document.createElement('td');
    let tdAmount = document.createElement('td');
    let tdValue = document.createElement('td');

    //Cria info do TD
    let productId = document.createTextNode(product.id);
    let productCode = document.createTextNode(product.code);
    let productDescription = document.createTextNode(product.description);
    let productAmount = document.createTextNode(product.amount);
    let productValue = document.createTextNode(product.value);

    //Acrescenta um dentro do outro
    tdId.appendChild(productId);
    tdCode.appendChild(productCode);
    tdDescription.appendChild(productDescription);
    tdAmount.appendChild(productAmount);
    tdValue.appendChild(productValue);

    trBody.appendChild(tdId);
    trBody.appendChild(tdCode);
    trBody.appendChild(tdDescription);
    trBody.appendChild(tdAmount);
    trBody.appendChild(tdValue);

    body.appendChild(trBody);

    //Acrescenta na tabela
    productTable.appendChild(body);

    //-------------------------------------------------------------------//

    var td = document.createElement("td");

    trBody.appendChild();
    body.appendChild(trBody);
    productTable.appendChild(body);

    debugger
    //criar elementos
    var line = document.createElement("tr");
    var idField = document.createElement("td");
    var codeField = document.createElement("td");
    var descriptionField = document.createElement("td");
    var amountField = document.createElement("td");
    var valueField = document.createElement("td");
    //criar nos 
    var idText = document.createTextNode("productId");
    var codeText = document.createTextNode("productCodeId");
    var descriptionText = document.createTextNode("productDescriptionId");
    var amountText = document.createTextNode("productAmountId");
    var valueText = document.createTextNode("productValueId");
    //vincular nos aos elementos
    idField.appendChild(idText);
    codeField.appendChild(codeText);
    descriptionField.appendChild(descriptionText);
    amountField.appendChild(amountText);
    valueField.appendChild(valueText);

    line.appendChild(idField);
    line.appendChild(codeField);
    line.appendChild(descriptionField);
    line.appendChild(amountField);
    line.appendChild(valueField);

    //let productTable = document.getElementById("productTableId");

    productTable.appendChild(line);

}