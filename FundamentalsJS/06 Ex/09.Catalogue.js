function catalogue (input) {
    let result = {};

    for (let line of input) {
        line = line.split(' : ');
        let product = line[0];
        let price = line[1];
        result[product] = price;
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    
    let initialGroupArr = [];
    for (let [product, price] of sorted) {
        let initialGroup = product[0];
        if (initialGroupArr.includes(initialGroup)) {
            console.log(`  ${product}: ${price}`);
        } else {
            console.log(initialGroup);
            console.log(`  ${product}: ${price}`);
        }
        initialGroupArr.push(initialGroup);
    }

}


catalogue ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);