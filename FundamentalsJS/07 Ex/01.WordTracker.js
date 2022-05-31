// function wordTracker(input) {
//     let words = input.shift().split(' ');
//     let result = {};
//     for (let word of words) {
//         result[word] = 0;
//     }

//     for (let word of input) {
//         if (result.hasOwnProperty(word)) {
//             let currCount = result[word];
//             let newCount = Number(currCount + 1);
//             result[word] = newCount
//         }
//     }

//     let sorted = Object.entries(result);
//     sorted = sorted.sort((a, b) => b[1] - a[1]);

//     for (let [word, num] of sorted) {
//         console.log(word, '-', num);
//     }
// }

function wordTracker(input) {
    let map = new Map;
    let words = input.shift().split(' ');

    for (let word of words) {
        map.set(word, 0);
    }

    for (let word of input) {
        if (map.has(word)) {
            let currCount = map.get(word);
            let newCount = Number(currCount + 1);
            map.set(word, newCount);
        }
    }

    let sorted = Array.from(map);
    sorted = sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, num] of sorted) {
        console.log(word, '-', num);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);