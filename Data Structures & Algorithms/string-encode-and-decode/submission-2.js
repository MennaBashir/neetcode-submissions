class Solution {
     encode(strs) {
       let newStr="";
       for(let val of strs){
           newStr +=val.length+'#'+val
       }
       return newStr
   }
// input:: 2#we4#code3#you
//out: :["we","code","you"]
    decode(str) {
        let arr=[];
         let num="";
       for(let i=0;i<str.length;i++){
           //read number until reach #
           if(str[i]!=='#'){
               num+=str[i]
           }else{
               console.log(num)
                let cutStr=str.substr(i+1,Number(num));//we
               arr.push(cutStr)//we,
               i+=Number(num)
               num=""
           }
       }
      return arr
       
   }


}
