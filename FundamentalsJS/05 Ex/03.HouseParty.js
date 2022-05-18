function houseParty (inputArray) {
    let result = [];
    for (let element of inputArray) {
        element = element.split(' ');
        if (element.length == 3) {
            let isInList = false;
            for (let name of result) {
                if (name == element[0]) {
                    console.log(`${name} is already in the list!`);
                    isInList = true;
                }
            }
            if (isInList == false) {
                result.push(element[0]);
            }
        } else {
            let isInList = false;
            for (let i = 0; i < result.length; i++) {
                let name = result[i];
                if (name == element[0]) {
                    result.splice(i, 1);
                    isInList = true;
                }
            }

            if (isInList == false) {
                console.log(`${element[0]} is not in the list!`);
            }
        }
    }

    console.log(result.join('\n'));
}

houseParty (['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);