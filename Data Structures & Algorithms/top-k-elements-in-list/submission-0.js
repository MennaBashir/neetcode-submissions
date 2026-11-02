class Solution {
    
    topKFrequent(nums, k) {
          let mapValues=new Map();
    for(let val of nums){
            mapValues.set(val,mapValues.get(val)?mapValues.get(val)+1:1)
    }
    // [...mapValues] => convert into array [ [ 4, 1 ], [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ]
   let sortArr= [...mapValues].sort((a,b)=>b[1]-a[1]);
    let storeNums=[]
    for(let val of sortArr){
        if(k===0)break;
        storeNums.push(val[0]);
        k-=1;
    }
    return storeNums
    }
}
