function longestWord(sentence) {
  const words = sentence.split(' ');
  let maxWord = '';
  for (let word of words) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  return maxWord;
}


console.log(longestWord("JavaScript is powerful")); 