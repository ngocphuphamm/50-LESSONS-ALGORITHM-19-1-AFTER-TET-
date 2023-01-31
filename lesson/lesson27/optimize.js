const patternLetters = pattern.split('');
const words = s.split(' ');

const lettersMatches = [];
const wordsMatches = [];

for(let i = 0; i < patternLetters.length; i++) {
    lettersMatches.push([words[i], patternLetters[i]]);
}

for(let i = 0; i < words.length; i++) {
    wordsMatches.push([patternLetters[i], words[i]]);
}



dictLetters = Object.fromEntries(lettersMatches);
dictWords = Object.fromEntries(wordsMatches);


const checkingPatternLetters = [];
const checkingPatternWords = [];

words.forEach(word => {
    checkingPatternLetters.push(dictLetters[word]);
})

patternLetters.forEach(word => {
    checkingPatternWords.push(dictWords[word]);
})

const checkingPattern = checkingPatternLetters.join('');
const checkingWords = checkingPatternWords.join(' ');
console.log(checkingPattern, checkingWords)

return checkingPattern === pattern && checkingWords === s