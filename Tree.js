class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(child) {
        if (child instanceof Node) {
            this.children.push(child)
        } else {
            throw console.log('child must be instace');
        }
    }
    removeNode(value) {
        const index = this.children.indexOf(value)
        if (index !== -1) {
            this.children.splice(index, 1)
        }
    }
}

class Tree {
    constructor(root) {
        this.root = new Node(root)
    }
}
const treeRoot = new Tree('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')

treeRoot.root.addChild(nodeB)
treeRoot.root.addChild(nodeC)
nodeB.addChild(nodeD)
nodeB.addChild(nodeC)
console.log(treeRoot);
