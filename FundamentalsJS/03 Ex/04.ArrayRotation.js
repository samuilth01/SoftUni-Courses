function arrayRotation (arr, n) {

    for (let i = 1; i <= n; i++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));
}

arrayRotation ([51, 47, 32, 61, 21], 2)