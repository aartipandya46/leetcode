/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
     const a = [];
    for(let i=0;i<=rowIndex;i++){
        a.push(new Array(i+1));
    } 
    for(let i=0;i<=rowIndex;i++){
        for(let j=0;j<a[i].length;j++){
            if(j===0 || j===a[i].length-1)
                a[i][j]=1;
            else
                a[i][j]=a[i-1][j]+a[i-1][j-1];
        }
    }
    return a[rowIndex];
};
