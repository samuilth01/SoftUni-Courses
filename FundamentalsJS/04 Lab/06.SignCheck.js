function signCheck (num1, num2, num3) {

    function positiveOrNegative(n1, n2, n3) {
        isPositive = true;
        if (n1 > 0 && n2 > 0 && n3 > 0) {
            isPositive = true;
        } else if (n1 < 0 && n2 < 0 && n3 > 0) {
            isPositive = true;
        } else if (n1 > 0 && n2 < 0 && n3 < 0) {
            isPositive = true;
        } else if (n1 < 0 && n2 > 0 && n3 < 0) {
            isPositive == true;
        } else {
            isPositive = false;
        }
        if (isPositive) {
            return 'Positive';
        } else {
            return 'Negative'
        }
        
    }

    console.log(positiveOrNegative(num1, num2, num3));
}


signCheck (1, -2, 4)