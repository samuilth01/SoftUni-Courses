function companyUsers(input) {
    let companies = {};

    for (let line of input) {
        let [company, employeeId] = line.split(' -> ');
        
        if (companies.hasOwnProperty(company) == false) {
            companies[company] = new Set;
        }

        companies[company].add(employeeId);
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let [company, employees] of sorted) {
        console.log(company);
        for (let employee of Array.from(employees)) {
            console.log(`-- ${employee}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

console.log('----');

companyUsers ([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )