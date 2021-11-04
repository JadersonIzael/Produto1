function createTableList(employeeList = []) {
    for (let index = 0; index < employeeList.length; index++) {
        createTableLine(employeeList[index]);
    }
}


function createTableLine(employee) {
    
    var employeeBodyTable = document.getElementById("employeeBodyTableId");
    var trBody = document.createElement("tr");

    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdOffice = document.createElement('td');
    let tdBirthDate = document.createElement('td');
    let tdWage = document.createElement('td');
    let tdActive = document.createElement('td');
    let tdSex = document.createElement('td');
    //let tdCreateDate = document.createElement('td');
    //let tdUpdateDate = document.createElement('td');
    //let tdDaysAway = document.createElement('td');
    let tdDelete = document.createElement('td');
    let tdDetails = document.createElement('td');
    let tdEdit = document.createElement('td');

    let employeeId = document.createTextNode(employee.id);
    let employeeName = document.createTextNode(employee.name);
    let employeeOffice = document.createTextNode(employee.office);
    let employeeBirthDate = document.createTextNode(employee.bithDate);
    let employeeWage = document.createTextNode(employee.wage);
    let employeeActive = document.createTextNode(employee.active);
    let employeeSex = document.createTextNode(employee.sex);
    //let employeeCreateDate = document.createTextNode(employee.createDate);
    //let employeeUpdateDate = document.createTextNode(employee.updateDate);
    //let employeeDaysAway = document.createTextNode(employee.daysAway);

    let textDelete = document.createTextNode('Deletar');
    let buttonDelete = document.createElement('button');
    let textDetails = document.createTextNode('Detalhes');
    let buttonDetails = document.createElement('button');
    let textEdit = document.createTextNode('Editar');
    let buttonEdit = document.createElement('button');    

    tdId.setAttribute('id', 'employeeId' + employee.id);

    buttonDelete.setAttribute('onclick', "deleteById($event)");

    buttonDelete.setAttribute('class', 'btn-Delete');
    buttonDetails.setAttribute('class', 'btn-Details');
    buttonEdit.setAttribute('class', 'btn-Edit');



    buttonDelete.addEventListener('click', function (event) {

        if (window.confirm("Voce deseja realmente DELETAR essa linha?")) {
            deleteById(employee.id);
            document.location.reload(true);
        }
        else {
            document.location.reload(true);
            
        }
    }, false);

    buttonDetails.setAttribute('onclick', "get($event)");
    buttonDetails.addEventListener('click', function (event) {

        let detailsEmployeeId = document.getElementById("detailsEmployeeId");
        detailsEmployeeId.innerText = employee.id

        let detailsEmployeeName = document.getElementById("detailsEmployeeName");
        detailsEmployeeName.innerText = employee.name

        let detailsEmployeeOffice = document.getElementById("detailsEmployeeOffice");
        detailsEmployeeOffice.innerText = employee.office

        let detailsEmployeeBirthDate = document.getElementById("detailsEmployeeBirthDate");
        detailsEmployeeBirthDate.innerText = employee.birthDate

        let detailsEmployeeWage = document.getElementById("detailsEmployeeWage");
        detailsEmployeeWage.innerText = employee.wage

        let detailsEmployeeActive = document.getElementById("detailsEmployeeActive");
        detailsEmployeeActive.innerText = employee.active

        let detailsEmployeeSex = document.getElementById("detailsEmployeeSex");
        detailsEmployeeSex.innerText = employee.sex        
        //-------------------------------------------------------------
        let detailsEmployeeCreateDate = document.getElementById("detailsEmployeeCreateDate");
        detailsEmployeeCreateDate.innerText = employee.createDate

        let detailsEmployeeUpdateDate = document.getElementById("detailsEmployeeUpdateDate");
        detailsEmployeeUpdateDate.innerText = employee.updateDate

        let detailsEmployeeDaysAway = document.getElementById("detailsEmployeeDaysAway");
        detailsEmployeeDaysAway.innerText = employee.daysAway

        $("#modalEmployeeDetailsId").modal();

    }, false);


    buttonEdit.addEventListener('click', function (event) {
        
        let editEmployeeId = document.getElementById("editId");
        editEmployeeId.value = employee.id;

        let detailsEmployeeName = document.getElementById("editNameId");
        detailsEmployeeName.innerText = employee.name;

        let detailsEmployeeOffice = document.getElementById("editOfficeId");
        detailsEmployeeOffice.innerText = employee.office;

        let detailsEmployeeBirthDate = document.getElementById("editBirthDateId");
        detailsEmployeeBirthDate.innerText = employee.birthDate;

        let detailsEmployeeWage = document.getElementById("editWageId");
        detailsEmployeeWage.value = employee.wage;

        let detailsEmployeeActive = document.getElementById("editActiveId");
        detailsEmployeeActive.value = employee.active;

        let detailsEmployeeSex = document.getElementById("editSexId");
        detailsEmployeeSex.innerText = employee.sex;
        
        //let detailsEmployeeUpdateDate = document.getElementById("editUpdateDateId");
        //detailsEmployeeUpdateDate.innerText = employee.updateDate;

        let detailsEmployeeDaysAway = document.getElementById("editDaysAwayId");
        detailsEmployeeDaysAway.value = employee.daysAway;

        $("#modalEditId").modal();

    }, false);

    buttonDelete.appendChild(textDelete);
    buttonDetails.appendChild(textDetails);
    buttonEdit.appendChild(textEdit);

    tdId.appendChild(employeeId);
    tdName.appendChild(employeeName);
    tdOffice.appendChild(employeeOffice);
    tdBirthDate.appendChild(employeeBirthDate);
    tdWage.appendChild(employeeWage);
    tdActive.appendChild(employeeActive);
    tdSex.appendChild(employeeSex);
    //tdCreateDate.appendChild(employeeCreateDate);
    //tdUpdateDate.appendChild(employeeUpdateDate);
    //tdDaysAway.appendChild(employeeDaysAway);

    tdDelete.appendChild(buttonDelete);
    tdDetails.appendChild(buttonDetails);
    tdEdit.appendChild(buttonEdit);

    trBody.appendChild(tdId);
    trBody.appendChild(tdName);
    trBody.appendChild(tdOffice);
    trBody.appendChild(tdBirthDate);
    trBody.appendChild(tdWage);
    trBody.appendChild(tdActive);
    trBody.appendChild(tdSex);
    //trBody.appendChild(tdCreateDate);
    //trBody.appendChild(tdUpdateDate);
    //trBody.appendChild(tdDaysAway);

    trBody.appendChild(tdDelete);
    trBody.appendChild(tdDetails);
    trBody.appendChild(tdEdit);

    if (employee.id >= 0) {
        employeeBodyTable.appendChild(trBody);
    }
    else {
        alert("Id nao encontrada!");
    }
}


$(document).ready(function () {
    $("#btnCallModalId").click(function () {
        $("#modalEmployeeDetailsId").modal();
    });
});

$(document).ready(function () {
    $("#btnCallModalEditId").click(function () {
        $("#modalEditId").modal();
    });
});

$(document).ready(function () {
    $("#btnInputId").click(function () {
        $("#modalInputId").modal();
    });
});
