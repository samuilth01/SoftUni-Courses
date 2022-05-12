function negativeOrPositiveNumbers (arr) {
    let newArr = [];
    for (let el of arr) {
        let num = Number(el);
        if (num >= 0) {
            newArr.push(num);
        } else {
            newArr.unshift(num);
        }
    }
    //console.log(newArr.join('\n'));
    for (let i of newArr) {
        console.log(i);
    }
}


negativeOrPositiveNumbers (['7', '-2', '8', '9']);