/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function deleteMiddle(head) {
  // One node list
  if (head.next == null) return null;

  // console.log(JSON.stringify(head))
  // {"val":1,"next":{"val":3,"next":{"val":4,"next":{"val":7,"next":{"val":1,"next":{"val":2,"next":{"val":6,"next":null}}}}}}}

  let slow = new ListNode(null, head),
    fast = head;

  // 현재 노드, 그 다음 노드가 있어야 다다음 노드 탐색이 의미있기에
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
}

function deleteMiddle(head) {
  if (head.next == null) return null;

  let slow = head;
  let fast = head;
  let prevSlow = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prevSlow = slow;
    slow = slow.next;
  }

  prevSlow.next = slow.next;
  return head;
}
