function addAndSubtract (arr) {
    let newArr = [];
    let sumOfArr = 0;
    let sumOfNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sumOfArr += num;
        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        newArr.push(num);
        sumOfNewArr += num;
    }

    console.log(newArr);
    console.log(sumOfArr);
    console.log(sumOfNewArr);
}

addAndSubtract ([5, 15, 23, 56, 35]);