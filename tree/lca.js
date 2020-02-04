
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) {
        return null;
    }

    if (root === p || root === q) {
        return root
    }

    const left = lowestCommonAncestor(root.left, p,q)
    const right = lowestCommonAncestor(root.right, p,q)
    if (left !== null && right !== null) {
        return root;
    }
    return left ? left : right
};

const tree = [3,5,1,6,2,0,8,null,null,7,4];
/** 
* @param {TreeNode} root
*/ 
 
let p = null
let q = null
function insertNode(tree, root, i, n) {
    if (i<n) {
        const temp = new TreeNode(tree[i]);
        root = temp;
        if (tree[i]===7) {
            p = temp;
        }
        if (tree[i]===8) {
            q = temp;
        }
        root.left = insertNode(tree, root.left, 2*i+1, n)
        root.right = insertNode(tree, root.right, 2*i+2, n)
    }
    return root; 
}

const node = insertNode(tree, null, 0, tree.length);

console.log(lowestCommonAncestor(node, p, q).val);