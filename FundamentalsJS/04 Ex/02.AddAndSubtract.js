function addAndSubtract (num1, num2, num3) {
    let sum = (n1, n2) => n1+ n2;

    let subtract = (x, n3) => x - n3;

    let result = subtract(sum(num1, num2), num3);
    console.log(result);
}

addAndSubtract(23,
    6,
    10
    );