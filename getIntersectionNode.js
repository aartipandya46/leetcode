var getIntersectionNode = function(headA, headB) {
    let slow = headA;
    let fast = headB;
    while(slow){
        fast= headB;
        while(fast){
            if(slow===fast)
                return slow;
        fast= fast?.next;
        }
        slow=slow?.next;
    }
        return;
};
