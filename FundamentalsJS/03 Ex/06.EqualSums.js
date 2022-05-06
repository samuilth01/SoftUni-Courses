function equalSums (arr) {
    let checking = true;
    if (arr.length <= 1) {
        console.log('0');
        checking = false;
    } else {
        for (let i = 1; i < arr.length; i++) {
            let left = 0;
            let right = 0;
            for (let k = 0; k < i; k++) {
                left += arr[k];
            }
            for (let j =  i + 1; j < arr.length; j++) {
                right += arr[j];
            }

            if (left === right) {
                console.log(i);
                checking = false;
            }
        }
    }

    if (checking) {
        console.log('no');
    }
}

equalSums ()