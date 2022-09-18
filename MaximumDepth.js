var maxDepth = function(root) {
    function traverse(node=root){
        if(node===null) return 0;
        
        const left=traverse(node.left);
        const right=traverse(node.right);
        
        return Math.max(left,right)+1;
    }
    return traverse();
};
