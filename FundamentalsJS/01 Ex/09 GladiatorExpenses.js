function gladiatorExpenses (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let helmetTotalPrice = 0;
    let swordTotalPrice = 0;
    let shieldTotalPrice = 0;
    let armorTotalPrice = 0;

    let trashSHieldCouter = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            helmetTotalPrice += helmetPrice;
            swordTotalPrice += swordPrice;
            shieldTotalPrice += shieldPrice;
            trashSHieldCouter++;
        } else if (i % 2 === 0) {
            helmetTotalPrice += helmetPrice;
        } else if (i % 3 === 0) {
            swordTotalPrice += swordPrice;
        }

        if (trashSHieldCouter % 2 === 0 && trashSHieldCouter !== 0) {
            armorTotalPrice += armorPrice;
            trashSHieldCouter = 0;
        }
    }

    let expenses = helmetTotalPrice + swordTotalPrice + shieldTotalPrice + armorTotalPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);