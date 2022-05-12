function sumFirstAndLast (arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let result = first + last;

    console.log(result);
}


sumFirstAndLast (['20', '30', '40']);