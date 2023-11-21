function listEmployees(arrayOfNames) {
    for (const employee of arrayOfNames) {
        employeeObject = {
            name: employee,
            number: employee.length
        }

        console.log(`Name: ${employeeObject.name} -- Personal Number: ${employeeObject.number}`)

    }
}

listEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )