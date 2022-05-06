function dungeonestDark (input) {
    let health = 100;
    let coins = 0;

    let num = '';
    let word = '';
    let str = input[0].toString();
    let roomsCounter = 0;

    for (let j = 0; j < str.length; j++) {
        let i = str[j];
        if ((i == '0' || i == '1' || i == '2' || i == '3' || i == '4' || i == '5' || i == '6' || i == '7' || i == '8' || i == '9') && i != ' ' && i != '|') {
            num += i;
        } else if (i != ' ' && i != '|') {
            word += i;
        }

        if (i == '|' || j == str.length - 1) {
            roomsCounter ++;
            num = Number(num);
            if (word == 'potion') {
                if (health < 100 && num <= 100 - health) {
                    health += num;
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else if (health <= 100 && num > 100 - health) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health += 100 - health;
                    console.log(`Current health: ${health} hp.`);
                }
            } else if (word == 'chest') {
                coins += num;
                console.log(`You found ${num} coins.`);
            } else {
                health -= num;
                if (health <= 0) {
                    console.log(`You died! Killed by ${word}.`);
                    console.log(`Best room: ${roomsCounter}`);
                    break;
                } else {
                    console.log(`You slayed ${word}.`);
                }
            }

            num = '';
            word = '';
        }
        
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonestDark (["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);








// let str = input[0].toString();
//     let array = []
//     for (let i = 0; i < str.length; i++) {
//         array.push(str[i]);
//         if (str[i] === ' ' || str[i] === '|'){
//             array.pop();
//         }
//     }
//     let word = '';
//     let num = '';
//     for (let i = 0; i < array.length; i++) {
//         if (Number(i) == NaN) {
//             word = word + array[i];
//         } else {
//             num = num + array[i];
//         }
//     }