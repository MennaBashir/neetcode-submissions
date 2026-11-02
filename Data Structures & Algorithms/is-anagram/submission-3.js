class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
 
     isAnagram(s, t) {
       if(s.length!==t.length) return false;
      let mapValues=new Map();
       //[b,2] [c,2]
       for(let val of s){
           mapValues.set(val, mapValues.get(val)? mapValues.get(val)+1:1)
       }
       //t=ccpc
       for(let val of t){
           if(mapValues.has(val)){
               let newCount=mapValues.get(val)-1;
               if(newCount===-1)return false
                 mapValues.set(val, newCount)
           }else{
                return false
           }
       }
       return true

       
   }
}
