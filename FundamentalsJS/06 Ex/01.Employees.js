function employees (input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let obj = {};
        obj.employeeName = input[i];
        obj.personalNum = input[i].length;
        console.log(`Name: ${obj.employeeName} -- Personal Number: ${obj.personalNum}`);
    }
}

employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);