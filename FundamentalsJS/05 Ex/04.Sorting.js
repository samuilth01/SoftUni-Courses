function sorting (arr) {
    let count = arr.length;
    let sorted = arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = 0; i < count; i++) {
        let first = sorted.pop();
        let next = sorted.shift();
        newArr.push(first);
        newArr.push(next);
    }

    console.log(newArr.join(' '));
}

sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);