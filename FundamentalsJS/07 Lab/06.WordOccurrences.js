function wordOccurrences (input) {
    let map = new Map();

    for (let word of input) {
        if (map.has(word) == false) {
            map.set(word, 1)
        } else {
            let oldCount = map.get(word);
            let newCount = ++oldCount;
            map.set(word, newCount);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences (["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);