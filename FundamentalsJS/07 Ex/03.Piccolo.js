function piccolo(input) {
    let parking = new Set;

    for (line of input) {
        let [command, number] = line.split(', ');

        if (command === 'IN') {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    let sorted = Array.from(parking);
    sorted = sorted.sort((a, b) => a.localeCompare(b));
    
    for (let num of sorted) {
        console.log(num);
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);