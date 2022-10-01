var removeNthFromEnd = function(head, n) {

    const dummy = new ListNode();
    dummy.next = head;
    
    let p1 = dummy;
    let p2 = dummy;
    
    for (let i = 0; i < n + 1; i++) {
        p1 = p1.next;
    }
    
    while (p1) {    
        p1 = p1.next;
        p2 = p2.next;
    }
    p2.next = p2.next.next;
    return dummy.next;
};
