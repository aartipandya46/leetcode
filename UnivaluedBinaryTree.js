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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    
    if(root===null) return true;
    let val=root.val;
    function travel(node=root){
        if(node===null) return true;
        const left= travel(node.left);
        const right=travel(node.right);
        return left && right && node.val===val;
    }   
    return travel();
}
    
