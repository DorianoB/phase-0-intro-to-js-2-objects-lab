const employee = {
    name: "valueNAme",
    streetAddress:"valueStreet",
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
      };
    }

    const newEmployee = updateEmployeeWithKeyAndValue(
        employee,
        "name",
        "newValueName",
    )

    
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value; 
    return obj;
}

  const newEmployee1 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "name", 
    "newValueName");

    function deleteFromEmployeeByKey(obj, key, value){
        return {
            ...obj,
            [key]: value,
          };
    }
delete employee.name;

    function destructivelyDeleteFromEmployeeByKey(obj, key, value){
        obj[key] = value; 
        return obj;
    }
    delete employee.name;
  
