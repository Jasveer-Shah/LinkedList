

class Node {
    constructor(element, next){
        this.element = element;
        this.next = next || null;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

prepend(value){
   // create a node
    const node = Node(value, this.head);

    if(!this.head){
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
     this.size += 1;
     return this;
}
   
append(value){
    const node = Node(value);
    if(!this.head){
        this.head = node;
        this.tail = this.head;
    }else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size += 1;
    return this;
}


remove(value){
   if(!this.head) return null;
   if(this.size == 1 && this.head.element == value){
       this.head = null;
       this.tail = null;
       
   }else if(this.head.element == value){
       this.head = this.head.next;
   }else {
       let curr = this.head;
       while(curr.next.element !== value){
           curr = curr.next;
       }
       curr.next = curr.next.next;
   }if(curr.next == null){
       this.tail = curr;
   }
   this.size--;
   return this;
}
   

}