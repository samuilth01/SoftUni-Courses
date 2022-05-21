function inventory (input) {
    let listOfHeroes = [];

    for (let line of input) {
        let info = line.split(' / ');
        let heroName = info[0];
        let level = Number(info[1]);
        let inventory = info[2];
        let heroObj = {};
        heroObj.Hero = heroName;
        heroObj.level = level;
        heroObj.items = inventory;
        listOfHeroes.push(heroObj);
    }


    listOfHeroes.sort((a, b) => a.level - b.level);
    
    for (let hero of listOfHeroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);