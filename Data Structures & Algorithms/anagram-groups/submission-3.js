class Solution {
    groupAnagrams(strs) {
        if (strs.length <= 1) return [strs];
        let sorted = strs.map((s) => s.split("").sort().join(""));
        let arr = new Map(); //
        for (let i = 0; i < sorted.length; i++) {
            if (!arr.has(sorted[i])) {
                arr.set(sorted[i], [strs[i]]);
            } else {
                let s = arr.get(sorted[i]);
                arr.set(sorted[i], [...s, strs[i]]);
            }
        }
        return Array.from(arr.values());
    }
}
