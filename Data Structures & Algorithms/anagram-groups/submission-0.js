class Solution {
  groupAnagrams(strs) {
    let strsSort = strs.map(item => item.split('').sort().join(''));
    let arr = [];
    let usedBefore = new Set();
    for (let i = 0; i < strs.length; i++) {
      let newA = [strs[i]];
      if (usedBefore.has(i)) continue;
      for (let j = i + 1; j < strs.length; j++) {
        if (strsSort[i] === strsSort[j]) {
          newA.push(strs[j]);
          usedBefore.add(j);
        }
      }
      arr.push(newA);
    }
    return arr
  }
}
