function arenaTier(input) {
    let gladiators = {};
    let i = 0;
    let line = input[i];

    while (line !== 'Ave Cesar') {
        let command = line.split(' ');
        if (command[1] == 'vs') {
            let [firstGladiator, secondGladiator] = line.split(' vs ');
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let firstArr = Array.from(gladiators[firstGladiator]);
                let secondArr = Array.from(gladiators[secondGladiator]);
                let firstPoints = 0;
                let secondPoints = 0;
                for (let i of firstArr) {
                    for (let j of secondArr) {
                        if (i[0] === j[0]) {
                            firstPoints += Number(gladiators[firstGladiator].get(i[0]));
                            secondPoints += Number(gladiators[secondGladiator].get(j[0]));
                        }
                    }
                }
                if (firstPoints > secondPoints) {
                    gladiators[secondGladiator] = undefined;
                } else if (secondPoints > firstPoints) {
                    gladiators[firstGladiator] = undefined;
                }
            }
        } else {
            let [name, technique, skill] = line.split(' -> ');

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = new Map;
                gladiators[name].set(technique, skill);
            } else {
                if (!gladiators[name].has(technique)) {
                    gladiators[name].set(technique, skill);
                } else {
                    let currSkill = gladiators[name].get(technique);
                    if (currSkill < skill) {
                        gladiators[name].set(technique, skill);
                    }

                }
            }
        }
        i++;
        line = input[i];
    }

    let filtered = Object.entries(gladiators).filter((a) => a[1] != undefined);
    let sorted = filtered.sort((a, b) => {
        let x = Array.from(a[1]).length;
        let y = Array.from(b[1]).length;
        return y - x;
    });

    for (let [name, techniques] of sorted) {
        techniques = Array.from(techniques).sort((a, b) => b[1] - a[1]);
        let sum = 0;
        let arr = []
        for (let i of (techniques)) {
            sum += Number(i[1]);
            arr.push(i[0]);
        }

        console.log(`${name}: ${sum} skill`);
        for (let i of arr) {
            console.log(`- ${i} <!> ${gladiators[name].get(i)}`);
        }
    }
    

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

console.log('------');

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);