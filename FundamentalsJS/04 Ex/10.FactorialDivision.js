function factorialDivision (num1, num2) {
    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = num1; i > 1; i--) {
        firstFactorial *= i;
    }

    for (let i = num2; i > 1; i--) {
        secondFactorial *= i;
    }

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision (6, 2);