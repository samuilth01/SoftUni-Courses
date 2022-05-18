function gladiatorInventory (input) {
    let inventory = input.shift().split(' ');
    for (let command of input) {
        command = command.split(' ');
        let operation = command[0];
        let item = command[1];
        if (operation === 'Buy') {
            let isHave = false;
            for (let equipment of inventory) {
                if (equipment == item) {
                    isHave = true;
                    break;
                }
            }

            if (!isHave) {
                inventory.push(item);
            }
        } else if (operation == 'Trash') {
            let trashIndex = inventory.indexOf(item);
            if (trashIndex !== -1) {
                inventory.splice(trashIndex, 1);
            }
        } else if (operation == 'Repair') {
            let repairIndex = inventory.indexOf(item);
            if (repairIndex !== -1) {
                inventory.splice(repairIndex, 1);
                inventory.push(item);

            }
        } else if (operation == 'Upgrade') {
            let upArray = command[1].split('-');
            let upIndex = inventory.indexOf(upArray[0]);
            if (upIndex !== -1) {
                let upgradedItem = upArray.join(':');
                inventory.splice(upIndex + 1, 0, upgradedItem);
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory (['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);