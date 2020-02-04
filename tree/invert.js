
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const tree = [3,5,1,6,2,0,8,null,null,7,4];
/** 
* @param {TreeNode} root
*/ 
 
function insertBalancedBSTNode(tree, root, i, n) {
    if (i<n) {
        const mid = parseInt((i+n)/2)
        root = new TreeNode(tree[mid]);
        root.left = insertBalancedBSTNode(tree, root.left, mid+1, n)
        root.right = insertBalancedBSTNode(tree, root.right, i, mid)
    }
    return root; 
}

tree = [1,3,5,6,9,10,13];

const node = insertBalancedBSTNode(tree, null, 0, tree.length);

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if (root===null) {
        return null
    }
    root.left = invertTree(root.right);
    root.right = invertTree(root.left);
    return root;
};

console.log(invertTree(node));
