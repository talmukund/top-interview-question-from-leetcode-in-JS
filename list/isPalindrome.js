// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list = [1, 2, 3, 2, 1]

function insertNode(list, i) {
    if (i<list.length) {
        const head = new ListNode(list[i]);
        head.next = insertNode(list, i+1);
        return head;
    } else{
        return null
    }
}

const node = insertNode(list, 0);

/**
 * 
 * @param {ListNode} list 
 * @returns {Boolean}
 */
const isPalindrome = list =>{
    let head = list;
    const checkPalindromeUtil = (list)=>{
        if (list === null) {
            return true;
        }
        if (!checkPalindromeUtil(list.next)) {
            return false;
        }
        if (list.val === head.val) {
            head = head.next;
            return true;
        }
        return false;
    }
    return checkPalindromeUtil(list);
}