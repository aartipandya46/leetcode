/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for(let i=1;;i++){
        const res= n*i;
        if(res%2===0)
            return res;
    }
};
