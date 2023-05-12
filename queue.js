class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }
    dequeue() {
        if (!this.head) {
            return console.log('empty');
        } else {
            this.head = this.head.next
        }
    }
    print() {
        if (!this.head) {
            return console.log('list empty');
        } else {
            let curr = this.head
            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const list = new queue
list.enqueue(10)
list.enqueue(30)
list.enqueue(20)
list.dequeue()
list.print()
