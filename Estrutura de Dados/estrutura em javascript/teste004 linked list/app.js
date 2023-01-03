class LinkedList {
    constructor () {
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
    }

    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail)  {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    preappend(value) {
        const newNode = { value: value, next: this.head };
        
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if(!this.head) {
            console.error("A lista esta vazia");
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while (curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }
    
    insertAfter(value, aftervalue) {
        const  existingNode = this.find(aftervalue);

        if (existingNode) {
            const newNode = { value: value, next: existingNode.next}
            existingNode.next  = newNode;
        }


    }

    find(value) {
        if (!this.head) {
            return
        }

        let curNode = this.head;

        while(curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next   
        }

        return null;
    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while(curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}
const linkedlist = new LinkedList();
linkedlist.append('amanda');
linkedlist.append('trans');
linkedlist.append('linda');
linkedlist.preappend('maravilhosa');
console.log(linkedlist.toArray());
linkedlist.delete('linda');
console.log(linkedlist.toArray());
console.log(linkedlist.find('amanda'));
linkedlist.insertAfter('lgbt', 'amanda');
console.log(linkedlist.toArray());