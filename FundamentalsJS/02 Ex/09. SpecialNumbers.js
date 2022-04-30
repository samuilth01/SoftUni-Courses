function specialNumbers (n) {
    for (let i = 1; i <= n; i++) {
        let str = i.toString();
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            let num = Number(str[j]);
            sum += num;
            if (j == (str.length - 1)) {
                if (sum == 5 || sum == 7 || sum == 11) {
                    console.log(`${i} -> True`);
                } else {
                    console.log(`${i} -> False`);
                }
            }

        }
    }
}


specialNumbers(15);