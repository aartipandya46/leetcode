/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const result=[];
    while(head){
        result.push(head.val);    
        head= head?.next;
    }
    const rev = reverseArray(result);        
    return result.every((ele,index) => ele===rev[index]);
};

function reverseArray(arr) {
  let brandNewArray = [];
  for (let i = arr.length - 1; i >= 0; i--)
     brandNewArray.push(arr[i]);
  return brandNewArray;
}
