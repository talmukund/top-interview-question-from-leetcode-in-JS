// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list = [1, 2, 3, 4, 5]

function insertNode(list, i) {
    if (i<list.length) {
        const head = new ListNode(list[i]);
        head.next = insertNode(list, i+1);
        return head;
    } else{
        return null
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head===null) {
        return null
    }
    const next = reverseList(head.next);
    if (next !== null) {
        head.next.next = head;
        head.next = null;
        return next;
    }
    return head;
};

const node = insertNode(list, 0);

const r = reverseList(node);
console.log(r);