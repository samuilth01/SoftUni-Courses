function aMinerTask(input) {
    let resources = {};

    for (let index = 0; index < input.length; index += 2) {
        let resource = input[index];
        if (resources.hasOwnProperty(resource) == false) {
            resources[resource] = Number(input[index + 1]);
        } else {
            let num = Number(input[index + 1]);
            resources[resource] += num;
        }
    }

    for (let [resource, count] of Object.entries(resources)) {
        console.log(`${resource} -> ${count}`);
    }

}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);


console.log('-*-*-*-');

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);