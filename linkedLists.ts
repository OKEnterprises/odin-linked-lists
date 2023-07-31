class ListNode<E> {
    value: E;
    nextNode: ListNode<E> | undefined;

    constructor(value: E) {
        this.value = value;
    }

    setNext(n: ListNode<E> | undefined) {
        this.nextNode = n;
    }

    equals(o: ListNode<E>) {
        return this.value === o.value;
    }
}

class LinkedList<E> {
    size: number
    head: ListNode<E> | undefined;
    tail: ListNode<E>;

    constructor(head: ListNode<E>) {
        this.size = 0;
        this.head = head;
        this.tail = head;
    }

    append(value: ListNode<E>) {
        if (this.tail === null) {
            this.head = value;
            this.tail = value;
        } else {
            this.tail.setNext(value);
        }

        this.size++;
    }

    prepend(value: ListNode<E>) {
        if (this.tail === null) {
            this.head = value;
            this.tail = value;
        } else {
            value.setNext(this.head);
            this.head = value;
        }

        this.size++;
    }

    getSize(): number { return this.size; }
    
    getHead(): ListNode<E> | undefined { return this.head; }
    
    getTail(): ListNode<E> | undefined { return this.tail; }

    at(idx: number): ListNode<E> | undefined {
        if (idx === 0) return this.head;
        if (idx === this.size - 1) return this.tail;

        let i = 0;
        let curr = this.head;

        while (i < idx && curr?.nextNode) {
            curr = curr.nextNode;
        } 

        return curr;
    }

    pop(): void {
        const newTail = this.at(this.size - 2);
        if (newTail) {
            newTail.nextNode = undefined;
            this.tail = newTail;
        }
    }

    contains(elt: ListNode<E>): boolean {
        let curr = this.head;
        while (curr && curr.nextNode) {
            if (curr.equals(elt)) return true;
            curr = curr.nextNode;
        }
        return false;
    }
x
    find(elt: ListNode<E>): number {
        let idx = 0;
        let curr = this.head;

        while (curr && curr.nextNode) {
            if (curr.equals(elt)) return idx;
            idx++;
            curr = curr.nextNode;
        }

        return -1;
    }

    toString(): string {
        let output = "";
        let curr = this.head;

        while (curr && curr.nextNode) {
            output += `( ${curr.value} ) -> `;
        }

        output += "null"

        return output;
    }
}

const myHead = new ListNode(7);
console.log(myHead)
const myList = new LinkedList(myHead);
console.log(myList);