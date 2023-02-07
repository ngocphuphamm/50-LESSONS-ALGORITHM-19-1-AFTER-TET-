//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


function arrayToList(arr)
{
    let head = new ListNode(arr[0]);
    let currNode = head;
    let currIndex = 0;
    while(currNode !== null && currIndex < arr.length)
    {
        currNode.next = new ListNode(arr[currIndex]);
        currNode = currNode.next;
        currIndex++;
    }
    return head;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n = 2) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function(head, n = 2) {
    let arr = [];
    let res = new ListNode();
    let copy = res;
    while(head)
    {
        arr.push(head.val);
        head = head.next;
    }
    for(let i = 1; i < arr.length; i++)
    {
        if(arr.length - i - 1 == n) continue;
        copy.next = new ListNode(arr[i]);
        copy = copy.next;
    }


    console.log(res);
};


function main()
{
    let arr = [1, 2, 3, 4, 5];
    let linkedList = arrayToList(arr);
    removeNthFromEnd2(linkedList, 2);
}

main();
