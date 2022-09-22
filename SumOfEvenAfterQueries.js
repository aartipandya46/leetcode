var sumEvenAfterQueries = function(nums, queries) {
    const res=[];
    for(let i=0;i<queries.length;i++){
        nums[queries[i][1]]=nums[queries[i][1]]+queries[i][0];
        let sum=0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]%2===0)
            sum = sum+ nums[j];
        }
        res.push(sum);
    }
    return res;
};
