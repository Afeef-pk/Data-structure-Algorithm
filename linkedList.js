class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class likedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size + 1) {
      return console.log("invalid index given");
    }
    const node = new Node(value);
    if (index === 0) {
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  removeWithIndex(index) {
    if (index < 0 || index > this.size) {
      return console.log("invalid index");
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeWithValue(value) {
    if (this.size == 0) {
      return console.log("no elementes");
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.size == 0) {
      return console.log("list empty");
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1
  }

  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev= curr
      curr = next
    }
    this.head = prev
  }

  print() {
    if (!this.head) {
      return console.log("list empty");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }

  appendwithtail(value){
    const node = new Node(value)
    if(this.size ===0){
      this.head = node
      this.tail = node
    }else{
      console.log('ddd');
      this.tail.next=node
      this.tail = node
    }
    this.size++
  }
}
const list = new likedList();
list.print();

list.append(10);
list.append(20);
list.append(30);
list.appendwithtail(1000)
list.appendwithtail(2000)
list.appendwithtail(4000)
list.print();
