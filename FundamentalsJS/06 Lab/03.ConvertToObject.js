function convertToObject (jsonStr) {
    let person = JSON.parse(jsonStr);
    person = Object.entries(person);
    for (let i of person) {
        console.log(`${i[0]}: ${i[1]}`);
    }
}

convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}');