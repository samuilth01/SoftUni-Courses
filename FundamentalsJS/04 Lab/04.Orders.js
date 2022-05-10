function orders(product, count) {

    function finalPrice(product, n) {
        let price = 0;
        switch (product) {
            case 'coffee': price = 1.5 * n; break;
            case 'coke': price = 1.4 * n; break;
            case 'water': price = 1 * n; break;
            case 'snacks': price = 2 * n; break;
        }
        return price.toFixed(2);
    }

    console.log(finalPrice(product, count))
}

orders ('water', 5);