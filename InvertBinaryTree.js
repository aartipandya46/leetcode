var invertTree = function(root) {
  function invert(root1=root){
      if(root1===null) return;
      invert(root1.left);
      invert(root1.right);
      const temp = root1.left;
      root1.left= root1.right;
      root1.right=temp;
  }  
    invert();
    return root;
};
