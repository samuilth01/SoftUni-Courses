function integerAndFloat (num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let test = Math.round(sum);

    sum == test ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}

integerAndFloat(100, 20.1, 303)