function processOddNumbers (arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        let num = Number(arr[i]) * 2;
        newArr.push(num);
    }

    console.log(newArr.reverse().join(' '));
}

processOddNumbers ([3, 0, 10, 4, 7, 3]);