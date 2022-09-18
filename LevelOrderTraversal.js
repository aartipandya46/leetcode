var levelOrder = function(root) {
    if(!root) return [];
    const queue=[root,null];
    const res=[];
    let currentLevel = 0;
    if(root===null) return;

    while(queue.length>1){
        const temp = queue.shift();
        if(temp===null)
        {
                queue.push(null);
                currentLevel++;
                continue; 
        }
        if(temp?.left)
        queue.push(temp.left);
        if(temp?.right)
        queue.push(temp.right);
        
       if(!res[currentLevel]) 
            res[currentLevel] = [temp.val];
        else 
            res[currentLevel].push(temp.val);
    }
    return res;
};
