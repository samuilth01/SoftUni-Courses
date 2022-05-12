function arrayManipulations (input) {
    let array = input.shift().split(' ');

    for (let el of input) {
        let element = el.split(' ');
        let command = element[0];

        if (command == 'Add') {
            array.push(element[1]);
        } else if (command == 'Remove') {
            let newArr = [];
            for (let i of array) {
                if (i !== element[1]) {
                    newArr.push(i);
                }
            }
            array = newArr;
        } else if (command == 'RemoveAt') {
            array.splice(element[1], 1);
        } else if (command == 'Insert') {
            array.splice(element[2], 0, element[1]);
        }
    }

    console.log(array.join(' '));
}

arrayManipulations ([
'4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'
]);