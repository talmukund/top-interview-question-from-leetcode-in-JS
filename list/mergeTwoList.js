// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list = [1, 2, 3, 4, 5]

function insertNode(list, i) {
    if (i < list.length) {
        const head = new ListNode(list[i]);
        head.next = insertNode(list, i + 1);
        return head;
    } else {
        return null
    }
}

const node = insertNode(list, 0);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    if (l1.val > l2.val) {
        const l3 = new ListNode(l2.val);
        l3.next = mergeTwoLists(l1, l2.next);
        return l3
    } else {
        const l3 = new ListNode(l1.val);
        l3.next = mergeTwoLists(l1.next, l2);
        return l3
    }
    
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4]
let l1 = insertNode(list1, 0);
let l2 = insertNode(list2, 0);

console.log(JSON.stringify(mergeTwoLists(l1, l2)));