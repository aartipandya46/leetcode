/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length>1){
        const result=[];
        for(let i=0;i<nums.length-1;i++){
            result.push((nums[i]+nums[i+1])%10);
        }
        nums.length=0;
        nums=result;
    }
    return nums[0];
};
