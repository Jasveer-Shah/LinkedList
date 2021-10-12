

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
}