// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const arr1 = [1, 4, 8, 9]
const arr2 = [7, 3, 2, 5]

function insertNode(list, i) {
    if (i<list.length) {
        const head = new ListNode(list[i]);
        head.next = insertNode(list, i+1);
        return head;
    } else{
        return null
    }
}

const list1 = insertNode(arr1, 0);
const list2 = insertNode(arr2, 0);
let str = "";
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

console.log(addTwoNumbers(list1, list2));