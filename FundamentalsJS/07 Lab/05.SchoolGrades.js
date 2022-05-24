function schoolGrades(input) {
    let map = new Map();

    for (let tokens of input) {
        tokens = tokens.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (map.has(name) == false) {
            map.set(name, []);
        } 

        for (let grade of grades) {
            map.get(name).push(grade);
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    function avgGrade(arr) {
        let sum = 0;
        for (let i of arr) {
            sum += Number(i);
        }
        let avgResult = (sum / arr.length).toFixed(2);
        return avgResult
    }

    for (let line of sorted) {
        console.log(`${line[0]}: ${avgGrade(line[1])}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);