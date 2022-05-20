function city (input) {
    let cityObj = input;
    let keys = Object.keys(cityObj);
    
    for (let key of keys) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

city ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});