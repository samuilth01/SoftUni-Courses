function makeADictionary (input) {
    let result = [];
    for (let line of input) {
        let parsed = JSON.parse(line);
        result.push(parsed);
    }
    //result.sort((a, b) => a[0].localeCompare(b[0]));
    let obj = {};
    for (let word of result) {
        let kay = Object.keys(word);
        let definition = Object.values(word);
        obj[kay] = definition;
    }
    let sorted = Object.entries(obj);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    
    for (let [word, def] of sorted) {
        console.log(`Term: ${word} => Definition: ${def}`);
    }
}

makeADictionary ([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);