class Solution {
    hasDuplicate(nums) {
        let uniqueArr = [...new Set(nums)];
        return nums.length !== uniqueArr.length;
    }
}
