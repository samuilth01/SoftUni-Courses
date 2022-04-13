function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let heightCounter = 0;

    for (let step = base; step >= 1; step -= 2) {
        heightCounter++;


        if (step === 1 || step === 2) {
            let goldPerimeter = step * step;
            gold += goldPerimeter;
        } else {
            let perimeter = step * step;
            let stonePerimeter = (step - 2) * (step - 2);
            if (heightCounter % 5 === 0) {
                let lapisLazuliPerimeter = perimeter - stonePerimeter;
                stone += stonePerimeter;
                lapisLazuli += lapisLazuliPerimeter;
            } else {
                let marblePerimeter = perimeter - stonePerimeter;
                stone += stonePerimeter;
                marble += marblePerimeter;
            }
        }

    }

    let finalStone = stone * increment;
    let finalMarble = marble * increment;
    let finalLapiLazuli = lapisLazuli * increment;
    let finalGold = gold * increment;

    let finalheigth = heightCounter * increment;
    console.log(`Stone required: ${Math.ceil(finalStone)}`);
    console.log(`Marble required: ${Math.ceil(finalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(finalLapiLazuli)}`);
    console.log(`Gold required: ${Math.ceil(finalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalheigth)}`);


}


thePyramidOfKingDjoser(11, 1)

