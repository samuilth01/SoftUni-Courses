function amazingNumbers (num) {
    num = num.toString();
    let sum = 0;
    let isSpecial = false;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString();
    for (let j = 0; j < result. length; j++) {
        let test = Number(result[j]);
        if (test == 9) {
            isSpecial = true;
        }
    }

    if (isSpecial) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}


amazingNumbers(333);