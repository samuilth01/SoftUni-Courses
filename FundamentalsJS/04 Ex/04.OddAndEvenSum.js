function oddAndEvenSum (num) {
    function amounts (number) {
        let oddSum = 0;
        let evenSum = 0;
        let str = number.toString();
        for (let i = 0; i < str.length; i++) {
            let int = Number(str[i]);
            if (int % 2 == 0) {
                evenSum += int;
            } else {
                oddSum += int;
            }
        }

        return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }

    console.log(amounts(num));
}

oddAndEvenSum (1000435);