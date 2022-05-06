function reverseAnArrayOfNumbers (n, arr) {
    let output = ''
    for (let i = n - 1; i >= 0; i--) {
       output += arr[i] + " ";
    }

    console.log(output);
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);