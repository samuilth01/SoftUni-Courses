function condenseArrayToNumber (array) {
    let sum = 0;
    let condensed = [];
    for (let n of array) {
        condensed.push(n);
    }

        if (array.length > 1) {
            for (k = 0; k < array.length - 1; k++) {
                let temp = [];
                for (let i = 0; i < condensed.length - 1; i++) {
                    temp.push(condensed[i] + condensed[i + 1]);
                }
                condensed = temp;
            }
            
        }

        console.log(condensed.toString());
}


condenseArrayToNumber ([5,0,4]);