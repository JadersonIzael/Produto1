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

        let editName = document.getElementById("editNameId");
        let editOffice = document.getElementById("editOfficeId");
        let editBirthDate = document.getElementById("editBirthDateId");
        let editWage = document.getElementById("editWageId");
        let editActive = document.getElementById("editActiveId");
        let editSex = document.getElementById("editSexId");
        let editDaysAway = document.getElementById("editDaysAway");

        let allFilled = true;

        editName.style = null;
        let name = editName.value;
        if (name === null || name === '' || name === undefined) {
            editName.style = 'border: 1px solid red';
            allFilled = false;
        }

        editOffice.style = null;
        if (editOffice.value === null || editOffice.value === '' || editOffice.value === undefined) {
            editOffice.style = 'border: 1px solid red';
            allFilled = false;
        }

        editBirthDate.style = null;
        let birthDate = editBirthDate.value;
        if (birthDate === null || birthDate === '' || birthDate === undefined) {
            editBirthDate.style = 'border: 1px solid red';
            allFilled = false;
        }

        editWage.style = null;
        let wage = editWage.value;
        if (wage === null || wage === '' || wage === undefined) {
            editWage.style = 'border: 1px solid red';
            allFilled = false;
        }

        editActive.style = null;
        let active = editActive.value;
        if (active === null || active === '' || active === undefined) {
            editActive.style = 'border: 1px solid red';
            allFilled = false;
        }

        editSex.style = null;
        let sex = editSex.value;
        if (sex === null || sex === '' || sex === undefined) {
            editSex.style = 'border: 1px solid red';
            allFilled = false;
        }

        editDaysAway.style = null;
        let daysAway = editDaysAway.value;
        if (daysAway === null || daysAway === '' || daysAway === undefined) {
            editDaysAway.style = 'border: 1px solid red';
            allFilled = false;
        }

        let employee = {
            Id: document.getElementById("editId").innerText == '' ? null : Number(document.getElementById("editId").innerText),
            name: editName.value,
            office: editOffice.value,
            birthDate: editBirthDate.value,
            value: editWage.value,
            active: editActive.value,
            sex: editSex.value,
            daysAway: editDaysAway.value
        };

        if (allFilled) {
            let resp = await editModal(employee);
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




    document.getElementById("modalEmployeeDetailsId").addEventListener("click", async function () {

        let employee = {
            Id: document.getElementById("editId").innerText == '' ? null : Number(document.getElementById("editId").innerText),
            name: document.getElementById("editNameId").value,
            office: document.getElementById("editOfficeId").value,
            birthDate: document.getElementById("editBirthDateId").value,
            wage: Number(document.getElementById("editWageId").value),
            sex: document.getElementById("editSexId").value,
            //UpdateDate: document.getElementById("editUpdateDateId").value,
            daysAway: document.getElementById("editDaysAwayId").value,

        };

        let resp = await get(employee);

        createModalTableLine(resp.data);

    });

    document.getElementById("btnEmployeeListId").addEventListener("click", async function () {
        //debugger
        let query = {
            Id: document.getElementById("employeeId") == '' ? null : Number(document.getElementById("employeeId")),
            Name: document.getElementById("employeeNameId") == '' ? null : document.getElementById("employeeNameId"),
            Office: document.getElementById("employeeOfficeId") == '' ? null : document.getElementById("employeeOfficeId"),
            BirthDate: document.getElementById("employeeBirthDateId") == '' ? null : document.getElementById("employeeBirthDateId"),
            Wage: document.getElementById("employeeWageId") == '' ? null : Number(document.getElementById("employeeWageId")),
            Active: document.getElementById("employeeActiveId") == '' ? null : Number(document.getElementById("employeeActiveId")),
            Sex: document.getElementById("employeeSexId") == '' ? null : document.getElementById("employeeSexId"),
            //CreateDate: document.getElementById("employeeCreateDateId") == '' ? null : document.getElementById("employeeCreateDateId"),
            //UpdateDate: document.getElementById("employeeUpdateDateId") == '' ? null : document.getElementById("employeeUpdateDateId"),
            DaysAway: document.getElementById("employeeDaysAwayId") == '' ? null : document.getElementById("employeeDaysAwayId")
        };

        let resp = await list(query);
        createTableList(resp.data);
    })
});

async function post() {
    await axios
        .post('Employee/Post',
            params = {
                Id: Number(document.getElementById("employeeId").value),
                Name: document.getElementById("employeeNameId").value,
                Office: document.getElementById("employeeOfficeId").value,
                BirthDate: document.getElementById("employeeBirthDateId").value,
                Wage: Number(document.getElementById("employeeWageId").value),
                Active: Number(document.getElementById("employeeActiveId").value),
                Sex: document.getElementById("employeeSexId").value,
                //UpdateDate: document.getElementById("employeeUpdateDateId").value,
                //DaysAway: document.getElementById("employeeDaysAwayId").value,
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
        .put('Employee/Put',
            params = {
                Id: Number(document.getElementById("employeeId")),
                Name: document.getElementById("employeeNameId"),
                Office: document.getElementById("employeeOfficeId"),
                BirthDate: document.getElementById("employeeBirthDateId"),
                Wage: Number(document.getElementById("employeeWageId")),
                Sex: document.getElementById("employeeSexId"),
                //UpdateDate: document.getElementById("employeeUpdateDateId"),
                DaysAway: Number(document.getElementById("employeeDaysAwayId")),
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

async function editModal(employee) {
    await axios
        .put('Employee/Put', employee)
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
    let employeeId = Number(document.getElementById('employeeId')?.value);
    await axios
        .get('Employee/' + employeeId)
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

    let employeeId = Number(document.getElementById('employeeId')?.value);

    return deleteById(employeeId);
}

async function deleteById(employeeId) {

    await axios
        .delete('Employee/' + employeeId)
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
        .post('Employee/list', query)
        .then(function (response) {
            rsp = response;
            console.log(response);
        })
        .catch(function (error) {
            rsp = error;
        });

    return rsp;
}