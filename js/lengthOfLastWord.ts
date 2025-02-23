function lengthOfLastWord(s: string): number {
  const stringWithNoSpace = s.trimEnd();

  let lastWord = '';

  let j = stringWithNoSpace.length - 1;

  let doLoop = true;

  while (doLoop) {
    const char = stringWithNoSpace.at(j);

    if (char === ' ') doLoop = false;
    else lastWord += char;

    if (j === 0) doLoop = false;

    j--;
  }

  return lastWord.length;
}

console.log(lengthOfLastWord('luffy    cc'));
console.log(lengthOfLastWord('luffy    '));
