// import { makeHashMapFromString } from './utilities';

// function canConstruct(ransomNote: string, magazine: string): boolean {
//   if (magazine.length < ransomNote.length) return false;
//   if (magazine === ransomNote) return true;

//   const magazineMap = makeHashMapFromString(magazine);
//   const ransomNoteMap = makeHashMapFromString(ransomNote);

//   for (let [key, value] of ransomNoteMap) {
//     const magazineValue = magazineMap.get(key);

//     if (!magazineValue || magazineValue < value) return false;
//   }

//   return true;
// }

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;
  if (magazine === ransomNote) return true;

  const magazineArr = magazine.split('');

  for (const noteItem of ransomNote) {
    const magazineItemIndex = magazineArr.indexOf(noteItem);

    if (magazineItemIndex === -1) return false;

    magazineArr[magazineItemIndex] = '-';
  }

  return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aab', 'baa'));
console.log(
  canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj')
);
//
