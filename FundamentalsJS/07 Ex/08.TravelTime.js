function travelTime(input) {
    let countrys = {};

    for (let line of input) {
        let [country, town, travelCost] = line.split(' > ');
        if (countrys.hasOwnProperty(country) === false) {
            countrys[country] = new Map;
        }
        if (countrys[country].has(town)) {
            let currTownt = Math.min(countrys[country].get(town), travelCost)
            countrys[country].set(town, currTownt);
        } else {
            countrys[country].set(town, travelCost);

        }
    }

    let sorted = Object.entries(countrys).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [country, towns] of sorted) {
        let secondSort = Array.from(towns).sort((a, b) => a[1] - b[1]);
        let arr = [];
        for (let town of secondSort) {
            arr.push(town.join(' -> '));
        }

        console.log(`${country} -> ${arr.join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

console.log('-*-*-*-');

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);