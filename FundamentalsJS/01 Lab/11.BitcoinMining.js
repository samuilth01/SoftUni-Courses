function bitcoinMining (input) {
    let index = 0;
    let goldInMoney = 0;
    let bitcoinCounter = 0;
    let firstBitcoinDay = 0;
    for (let day = 1; day <= input.length; day++) {
        let dailyDoseOfGold = Number(input[index]);
        index++;
        if (day % 3 === 0) {
            dailyDoseOfGold = dailyDoseOfGold * 0.7;
        }
        goldInMoney += dailyDoseOfGold * 67.51;
        if (goldInMoney >= 11949.16) {
            if (bitcoinCounter === 0) {
                firstBitcoinDay = day;
            }
            for (let i = goldInMoney; i >= 11949.16; i -= 11949.16) {
                bitcoinCounter++;
                goldInMoney -= 11949.16;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (firstBitcoinDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${goldInMoney.toFixed(2)} lv.`);
     
}


bitcoinMining([50, 100]);