/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)
        return false;
    return compare(s.split("").sort(),t.split("").sort());
};

function compare(arr1,arr2){
    let isEqual=true;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            isEqual=false;
            break;   
        }
    }
    return isEqual;
}
