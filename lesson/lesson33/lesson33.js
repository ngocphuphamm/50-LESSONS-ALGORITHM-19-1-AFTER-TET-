//https://leetcode.com/problems/binary-tree-inorder-traversal/description/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    helpers(root,res);
    return res;
};

const helpers = (root,res) =>{
    if(root === null) return;
    helpers(root.left, res);
    res.push(root.val);
    helpers(root.right, res);
}

let node = new TreeNode(1);
node.right = new TreeNode(2);
node.right.left = new TreeNode(3);;

console.log(inorderTraversal(node));