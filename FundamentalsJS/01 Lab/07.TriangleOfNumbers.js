function triangleOfNumbers (n) {
    for (let i = 1; i <= n; i++) {
        let step = '';
        for (let j = i; j > 0; j--) {
            step += i + ' ';
        }

        console.log(step);
    }
}

triangleOfNumbers(5);