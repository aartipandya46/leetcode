/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const ans= num.toString(2);
    let res="";
    for(let i=0;i<ans.length;i++){
        let c = ans[i]==="1"?"0":"1";
        res=res+c;
    }
    return parseInt(res,2); 
};
