function sumFirstAndLastArrayElements (arr) {
    let lastEl = arr[arr.length - 1];
    let sum = arr[0] + lastEl;
    console.log(sum);
}


sumFirstAndLastArrayElements([10, 17, 22, 33]);