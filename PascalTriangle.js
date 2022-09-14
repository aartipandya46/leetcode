var generate = function(numRows) {
    const a = [];
    for(let i=0;i<numRows;i++){
        a.push(new Array(i+1));
    } 
    for(let i=0;i<numRows;i++){
        for(let j=0;j<a[i].length;j++){
            if(j===0 || j===a[i].length-1)
                a[i][j]=1;
            else
                a[i][j]=a[i-1][j]+a[i-1][j-1];
        }
    }
    return a;
};
