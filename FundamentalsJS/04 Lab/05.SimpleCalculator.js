function simpleCalculator(num1, num2, operator) {

    function finalResult(n1, n2, operator) {
        let result = 0;
        switch (operator) {
            case 'multiply': result = n1 * n2; break;
            case 'divide': result = n1 / n2; break;
            case 'add': result = n1 + n2; break;
            case 'subtract': result = n1 - n2; break;
        }
        return result;
    }

    console.log(finalResult(num1, num2, operator));
}