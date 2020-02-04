function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/** 
* @param {TreeNode} root
*/ 
 
let p = null
let q = null
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
console.log(node);