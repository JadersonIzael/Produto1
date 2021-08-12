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
    document.getElementById("btnGetId").addEventListener("click", async function () {
        let resp = await get();
        createTableLine(resp.data);
    })
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
        //researchCode(resp.data, 1);
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
async function deleteId() {

    let productId = Number(document.getElementById('productId')?.value);

    return deleteById(productId);
}

async function deleteById(productId) {
    //debugger
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
    //debugger
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