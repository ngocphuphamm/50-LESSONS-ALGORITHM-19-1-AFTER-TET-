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
    let stack = [];

    let currNode = root;

    while(currNode !== null || stack.length > 0)
    {

        while(currNode !== null)
        {
            stack.push(currNode);
            currNode = currNode.left
        }

        currNode = stack.pop();
        res.push(currNode.val);
        currNode = currNode.right;
    }
    return res;
};


let node = new TreeNode(1);
node.right = new TreeNode(2);
node.right.left = new TreeNode(3);;
console.log(inorderTraversal(node));