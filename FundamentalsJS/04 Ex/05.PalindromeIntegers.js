function palindromeIntegers (array) {
    function isPalindrome (number) {
        let startNum = number;
        let reversedNum = Number(number.toString().split('').reverse().join(''));
        if (startNum == reversedNum) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        console.log(isPalindrome(currentNum));
    }
}

palindromeIntegers ([123,323,421,121]);