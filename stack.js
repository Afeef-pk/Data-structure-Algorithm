class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class stack {
    constructor(value) {
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }
    pop() {
        if (!this.head) {
            return console.log('empty');
        } else {
            this.head = this.head.next
        }
    }
    print() {
        if (!this.head) {
            return console.log('empty');
        } else {
            let curr = this.head
            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
    
    middle() {
        let curr = this.head
        let count = 0
        while (curr) {
            count++
            curr = curr.next
        }
        let prev = this.head

        let arr =[]
        for (let i = 1; i < Math.ceil(count / 2); i++) {
            arr.push(prev)
            prev = prev.next
        }
        console.log(arr);
    }
}

const list = new stack
list.print()
list.push(10)
list.push(20)
list.push(30)
list.pop()
list.print()
