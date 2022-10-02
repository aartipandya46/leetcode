var removeElements = function(head, val) {
        let current=null;
        let prev=null;
    
        while(head){
            if(head.val===val)
                head=head.next;
            else
                break;
        }
        
        current=head?.next;
        prev=head;
        
        while(current){
            if(current.val===val)
            prev.next=prev?.next?.next ?? null;
            else
            prev=prev?.next;               

            current=current?.next;
        }
        return head;
};
