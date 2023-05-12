class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newnode = new Node(value)
        if (this.root === null) {
            this.root = newnode
        } else {
            let currentNode = this.root
            while (true) {
                if (newnode.value < currentNode.value) {
                    if (currentNode.left == null) {
                        currentNode.left = newnode
                        break;
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    if (currentNode.right == null) {
                        currentNode.right = newnode
                        break;
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root
        while (currentNode != null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else {
                return true;
            }
        }
        return false
    }

    //DFS Deapt first Search
    // 1.Pre Order (root,left,right)
    // 2.Post Order(left,right,root)
    // 3.In Order (left,root,right)

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    //BFS Bredth first search
    levelOrder() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) {
            return true
        }
        if (node.value < min || node.value > max) {
            return false;
        }
        return (this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max));
    }

    closest(target) {
        let current = this.root
        let closestValue = current.value
        while (current != null) {
            if (Math.abs(target - closestValue) > Math.abs(target - current.value)) {
                closestValue = current.value
            }
            if (target < current.value) {
                current = current.left
            }else if(target > current.value){
                current = current.right
            }else{
                break;
            }
        }
        return closestValue
    }

}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(13)
bst.insert(17)
bst.insert(20)
bst.insert(16)
bst.insert(24)
bst.insert(3)
bst.levelOrder()
console.log(bst.isBST());
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
//console.log(bst.search(24));
//bst.delete(18)
//bst.levelOrder()
console.log(bst.closest(19));
