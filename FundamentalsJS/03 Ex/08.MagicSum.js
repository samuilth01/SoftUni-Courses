function magicSum (arr, n) {

    for ( let i = 0; i < arr.length; i++) {

        for (let j = i; j < arr.length; j++) {

            if (i !== j && (arr[i] + arr[j] === n)) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

magicSum ([14, 20, 60, 13, 7, 19, 8], 27);