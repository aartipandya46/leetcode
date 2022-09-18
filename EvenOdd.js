var isEvenOddTree = function(root) {
    const res=[];
    let level=0;
    const queue=[root,null];
    while(queue.length>1){
        const temp=queue.shift();
        if(temp===null){
            queue.push(null);
            level++;
            continue;
        }
        if(temp?.left)
           queue.push(temp.left);
        if(temp?.right)
           queue.push(temp.right);
        
        if(!res[level])
            res[level]=[temp.val];
        else
            res[level].push(temp.val);
    }
    for(let i=0;i<res.length;i++){
        let evenOdd=false;
        if(i%2===0)
        {
                if(isAscending(res[i]) && isOdd(res[i]))
                evenOdd=true;
        } 
        else if(i%2!==0){
            if(isDescending(res[i]) && isEven(res[i]))
                evenOdd=true;
          
         } 
        if(evenOdd===false)
            return false;
    }
    return true;
};

function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x > arr[i - 1];
    });
}


function isEven(arr) {
    return arr.every(function (x) {
        return x%2===0;
    });
}
function isOdd(arr) {
    return arr.every(function (x) {
        return x%2!==0;
    });
}
function isDescending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x < arr[i - 1];
    });
}
