function legendaryFarming (input) {
    let str = input.toLowerCase();
    let strAsArr = str.split(' ');
    let legendaryItems = {
        'shards': 0,
        'fragments': 0,
        'motes': 0,
    };

    let junk = {};

    for (let i = 0; i < strAsArr.length; i += 2) {
        let quantity = Number(strAsArr[i]);
        let material = strAsArr[i + 1];

        if (material == 'shards') {
            legendaryItems[material] += quantity;
        } else if (material == 'fragments') {
            legendaryItems[material] += quantity;
        } else if (material == 'motes') {
            legendaryItems[material] += quantity;
        } else {
            if (junk.hasOwnProperty(material) === false) {
                junk[material] = quantity;
            } else {
                let currQuantity = junk[material];
                let newQuantity = quantity + currQuantity;
                junk[material] = newQuantity;
            }

        }
        
        if (legendaryItems['shards'] >= 250) {
            console.log('Shadowmourne obtained!');
            legendaryItems['shards'] -= 250;
            break;
        } else if (legendaryItems['fragments'] >= 250) {
            console.log('Valanyr obtained!');
            legendaryItems['fragments'] -= 250;
            break;
        } else if (legendaryItems['motes'] >= 250) {
            console.log('Dragonwrath obtained!');
            legendaryItems['motes'] -= 250;
            break;
        }

    }
    
    let sortedLegendary = Object.entries(legendaryItems).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [item, qty] of (sortedLegendary)) {
        console.log(`${item}: ${qty}`);
    }

    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [item, qty] of (sortedJunk)) {
        console.log(`${item}: ${qty}`);
    }
}

legendaryFarming ('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('---');
legendaryFarming ('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');