class stackArray {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
       return this.items.pop()
    }
    peek() {
        return console.log(this.items[this.items.length - 1]);
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());
    }
}

const stack = new stackArray

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.peek()


