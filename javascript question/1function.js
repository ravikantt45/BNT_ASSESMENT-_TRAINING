function mostRepeatedChar(str) {
  const freq = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }

  return maxChar;
}


console.log(mostRepeatedChar("aabbbcc")); 