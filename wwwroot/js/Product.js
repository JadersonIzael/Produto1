$(document).ready(async function () {
    document.getElementById("btnPostId").addEventListener("click", async function () {
        let resp = await post();
        document.location.reload(true);
    });
    document.getElementById("btnDeleteId").addEventListener("click", async function () {
        let resp = await deleteId();
        document.location.reload(true)
    });
    document.getElementById("btnPutId").addEventListener("click", async function () {
        let resp = await put();
        document.location.reload(true);
    });
    document.getElementById("btnPutModalId").addEventListener("click", async function () {

        let editCode = document.getElementById("editCodeId");
        let editDescription = document.getElementById("editDescriptionId");
        let editAmount = document.getElementById("editAmountId");
        let editValue = document.getElementById("editValueId");

        let allFilled = true;

        editCode.style = null;
        let code = editCode.value;
        if (code === null || code === '' || code === undefined) {
            editCode.style = 'border: 1px solid red';
            allFilled = false;
        }

        editDescription.style = null;
        if (editDescription.value === null || editDescription.value === '' || editDescription.value === undefined) {
            editDescription.style = 'border: 1px solid red';
            allFilled = false;
        }

        editAmount.style = null;
        let amount = editAmount.value;
        if (amount === null || amount === '' || amount === undefined) {
            editAmount.style = 'border: 1px solid red';
            allFilled = false;
        }

        editValue.style = null;
        let value = editValue.value;
        if (value === null || value === '' || value === undefined) {
            editValue.style = 'border: 1px solid red';
            allFilled = false;
        }

        let product = {
            Id: document.getElementById("editId").innerText == '' ? null : Number(document.getElementById("editId").innerText),
            code: editCode.value,
            description: editDescription.value,
            amount: editAmount.value,
            value: editValue.value
        };

        if (allFilled) {
            let resp = await editModal(product);
            document.location.reload(true);
        }
        else {
            alert("Preencha todos os campos!")
        }
    });

    document.getElementById("btnGetId").addEventListener("click", async function () {

        let resp = await get();
        createTableLine(resp.data);

    });

    


    document.getElementById("modalId").addEventListener("click", async function () {

        let product = {
            Id: document.getElementById("editId").innerText == '' ? null : Number(document.getElementById("editId").innerText),
            code: Number(document.getElementById("editCodeId").value),
            description: document.getElementById("editDescriptionId").value,
            amount: Number(document.getElementById("editAmountId").value),
            value: Number(document.getElementById("editValueId").value)
        };

        let resp = await get(product);

        createModalTableLine(resp.data);
        
    });



    document.getElementById("btnListId").addEventListener("click", async function () {
        //debugger
        let query = {
            Id: document.getElementById("productId").value == '' ? null : Number(document.getElementById("productId").value),
            Code: document.getElementById("productCodeId").value == '' ? null : Number(document.getElementById("productCodeId").value),
            Description: document.getElementById("productDescriptionId").value == '' ? null : document.getElementById("productDescriptionId").value,
            Amount: document.getElementById("productAmountId").value == '' ? null : Number(document.getElementById("productAmountId").value),
            Value: document.getElementById("productValueId").value == '' ? null : Number(document.getElementById("productValueId").value)
        };

        let resp = await list(query);
        //debugger
        createTableList(resp.data);
    })
});

async function post() {
    await axios
        .post('Product/Post',
            params = {
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
                Id: Number(document.getElementById("productId").value),
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

async function editModal(product) {
    await axios
        .put('Product/Put', product)
        .then(function (response) {
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
async function deleteId() {

    let productId = Number(document.getElementById('productId')?.value);

    return deleteById(productId);
}

async function deleteById(productId) {

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
async function list(query = {}) {

    await axios
        .post('Product/list', query)
        .then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });

    return rsp;
}

//function itsValid(product) {

//    if (product) {
//        if (temp == "" || temp == null) {
//            isNull = true;
//        }
//    }
//}