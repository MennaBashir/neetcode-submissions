class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
 twoSum(nums, target) {
   for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let slice_arr = nums.slice(i + 1);
    if (slice_arr.indexOf(diff) !== -1) {
      let diff_length = nums.length - slice_arr.length;
      console.log(i, slice_arr.indexOf(diff) + diff_length);
      return [i, slice_arr.indexOf(diff) + diff_length];
    }
  }
}

}
