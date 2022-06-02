function cutAndReverse(input) {
    let word1 = input.split('')
    .slice(0, input.length / 2)
    .reverse()
    .join('');
    console.log(word1);
    let word2 = input
    .split('')
    .slice(input.length / 2, input.length)
    .reverse()
    .join('')
    console.log(word2);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('---');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');