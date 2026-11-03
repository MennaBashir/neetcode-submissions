class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let s_new = new Map();
        let t_new = new Map();
        s = s.split("").sort().join("");
        t = t.split("").sort().join("");

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[i]) return false;
        }

        return true;
    }
}
