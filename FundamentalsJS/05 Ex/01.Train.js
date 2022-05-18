function train (input) {
    let vagons = input.shift().split(' ');
    let maxCapacity = input.shift();

    for (let command of input) {
        command = command.split(' ');
        if (command[0] == 'Add') {
            vagons.push(command[1]);
        } else {
            for (let i = 0; i < vagons.length; i++) {
                let num = Number(vagons[i]);
                if (maxCapacity >= num + Number(command[0])) {
                    num = Number(command[0]) + Number(num);
                    vagons.splice(i, 1, num)
                    break;
                }
            }
        }
    }

    console.log(vagons.join(' '));
}

train (['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);