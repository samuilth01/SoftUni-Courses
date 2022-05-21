function storeProvision (firstArr, secondArr) {
    let result = {};

    for (let i = 0; i < firstArr.length; i += 2) {
        result[firstArr[i]] = Number(firstArr[i + 1]);
    }

    for (let i = 0; i < secondArr.length; i += 2) {
        let isExist = result.hasOwnProperty(secondArr[i]);
        if (isExist) {
            result[secondArr[i]] += Number(secondArr[i + 1]);
        } else {
            result[secondArr[i]] = Number(secondArr[i + 1]);
        }
    }

    for (let [product, quantity] of Object.entries(result)) {
        console.log(`${product} -> ${quantity}`);
    }
}

storeProvision (
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);