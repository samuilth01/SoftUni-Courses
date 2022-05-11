function passwordValidator (password) {
    let isValid = true;
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }


    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        if ((char < 48 || char > 57) && (char < 65 || char > 91) && (char < 97 || char > 122)) {
            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;
        }
    }

    let intCounter = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        if (char >= 48 && char <= 57) {
            intCounter++;
        }
    }

    if (intCounter < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }


    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator ('logIn');