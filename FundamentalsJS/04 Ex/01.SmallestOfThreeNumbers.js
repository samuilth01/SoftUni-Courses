function smallestOfThreeNumbers (num1, num2, num3) {
    let smallest = (n1, n2, n3) => Math.min(n1, n2, n3); 

    console.log(smallest(num1, num2, num3));
}

smallestOfThreeNumbers (1, 39, -2);