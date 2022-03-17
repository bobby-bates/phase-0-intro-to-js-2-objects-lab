const employee = {
    name: 'Donnie Darko',
    streetAddress: '4225 Country Club Dr'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}