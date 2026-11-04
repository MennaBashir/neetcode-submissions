class Solution {
    twoSum(nums, target) {
        let nums2 = new Map();
        for (let i = 0; i < nums.length; i++) {
            let needed = target - nums[i]; //4,3
            if (nums2.has(needed)) //3 found in 0,
            {
                return [nums2.get(needed), i]; // 0.1
            }
            nums2.set(nums[i], i); //3,
        }
        return 0;
    }
}
