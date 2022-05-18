function arrayManipulator(arrOfNums, arrOfCommands) {
    let result = arrOfNums;
    let index = 0;
    let command = arrOfCommands[index];

    while (command !== 'print') {
        command = command.split(' ');
        if (command[0] == 'add') {
            result.splice(Number(command[1]), 0, Number(command[2]));
        } else if (command[0] == 'addMany') {
            let start = Number(command[1]);
            for (let i = command.length - 1; i >= 2; i--) {
                result.splice(start, 0, Number(command[i]));
            }
        } else if (command[0] == 'contains') {
            command[1] = Number(command[1]);
            console.log(result.indexOf(command[1]));
        } else if (command[0] == 'remove') {
            result.splice(command[1], 1);
        } else if (command[0] == 'shift') {
            let positions = Number(command[1]);
            for (let i = 1; i <= positions; i++) {
                let el = result.shift();
                result.push(el);
            }
        } else if (command == 'sumPairs') {
            if (result.length % 2 !== 0) {
                result.push(0);
            }
            result.map(Number);
            let newArray = [];
            for (let i = 0; i < result.length; i += 2) {
                let number = result[i] + result[i + 1];
                newArray.push(number);
            }
            result = newArray;
        }
        index++;
        command = arrOfCommands[index];
    }

    console.log(`[ ${result.join(', ')} ]`);
}


arrayManipulator([2, 2, 4, 2, 4],
    ['add 1 4', 'sumPairs', 'print']

);
