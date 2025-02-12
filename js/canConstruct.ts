import { makeHashMapFromString } from './utilities';

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap = makeHashMapFromString(magazine);
  const ransomNoteMap = makeHashMapFromString(ransomNote);

  for (let [key, value] of ransomNoteMap) {
    if (magazineMap.get(key) < value) return false;
  }

  return true;
}

console.log(canConstruct('aab', 'baa'));
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));
