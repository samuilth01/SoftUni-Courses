function login(input) {


    for(let index = 1; index < input.length; index++) {
        if (input[0].split('').reverse().join('') === input[index]) {
            console.log(`User ${input[0]} logged in.`);
        } else {
            if (index == 4) {
                console.log(`User ${input[0]} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])

