// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list = [1, 2]

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
// console.log(JSON.stringify(node));
let n = 0;

const deleteNode = (node, n) => {
    let firstNode = node, firstIndex = 1;
    let secondNode = node, secondIndex = 1;

    while (true) {
        if (firstNode.next === null) {
            if (secondIndex + n === firstIndex + 1) {
                secondNode.val = secondNode.next.val;
                secondNode.next = secondNode.next.next;
                break;
            }
            secondNode.next = secondNode.next.next;
            break;
        }

        firstIndex = firstIndex + 1;
        firstNode = firstNode.next;
        if (firstIndex - secondIndex === n + 1) {
            secondIndex = secondIndex + 1;
            secondNode = secondNode.next;
        }
    }
    console.log(JSON.stringify(node));
}

deleteNode(node, 2);