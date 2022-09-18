/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
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
    
    const newRes=[];
    for(let i=res.length-1;i>=0;i--)
        newRes.push(res[i]);
    return newRes;
};
