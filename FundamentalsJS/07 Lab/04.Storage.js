function storage(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (result.has(product) == false) {
            result.set(product, quantity);
        } else {
            let currQuantiy = result.get(product);
            let newQuantity = currQuantiy + quantity;
            result.set(product, newQuantity);
        }
    }

    for (let [kay, value] of result) {
        console.log(kay, '->', value);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);