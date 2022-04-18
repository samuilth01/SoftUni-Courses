function spiceMustFlow(startingYield) {
    let currentYield = 0;
    let daysCounter = 0;
    for (let dailyYield = startingYield; dailyYield >= 100; dailyYield -= 10) {
        currentYield += dailyYield - 26;
        daysCounter++;
    }

    console.log(daysCounter);

    if (currentYield >= 26) {
        console.log(currentYield - 26);
    } else {
        console.log(currentYield);
    }
}

spiceMustFlow(111);
