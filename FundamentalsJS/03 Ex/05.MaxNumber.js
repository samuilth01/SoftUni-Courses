function maxNumber (arr) {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let isTop = true;
        for (let k = i + 1; k < arr.length; k++) {
            if (element <= arr[k]) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            result += `${element} `;
        }
    }

    console.log(result);
}

maxNumber ([14, 24, 3, 19, 15, 17]);