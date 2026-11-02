class Solution {
  hasDuplicate(nums) {
    let setValues = new Set();
    for (let num of nums) {
      if (setValues.has(num)) return true;
      setValues.add(num);
    }
    return false;
  }
}
