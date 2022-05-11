function loadingBar (num) {
    function loadBar (procentage) {
        let bar = '';
        for (let i = 1; i <= 10; i++) {
            if (i <= procentage / 10) {
                bar += '%';
            } else {
                bar += '.'
            }
        }

        if (procentage < 100) {
            return (`${procentage}% [${bar}] \n Still loading...`);
        } else {
            return (`100% Complete! \n [${bar}]`);

        }
    }

    console.log(loadBar(num));
}

loadingBar (30);