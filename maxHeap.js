class maxHeap {
    constructor() {
        this.heap = []
    }

    buildMaxHeap(arr) {
        this.heap = arr
        let end = this.parent(this.heap.length - 1)
        for (let i = end; i >= 0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(currentIdx) {
        let end = this.heap.length - 1
        let leftidx = this.leftChild(currentIdx)
        while (leftidx <= end) {
            let rightIdx = this.rightChild(currentIdx)
            let indexToShift
            if (rightIdx <= end && this.heap[rightIdx] > this.heap[leftidx]) {
                indexToShift = rightIdx
            } else {
                indexToShift = leftidx
            }
            if (this.heap[currentIdx] < this.heap[indexToShift]) {
                this.swap(this.heap, indexToShift, currentIdx)
                currentIdx = indexToShift
                leftidx = this.leftChild(currentIdx)
            } else {
                return
            }
        }
    }

    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx)
        while (parentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
            this.swap(this.heap, currentIdx, parentIdx)
            currentIdx = parentIdx
            parentIdx = this.parent(currentIdx)
        }
    }

    peek() {
        return this.heap[0]
    }
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    remove(value) {
        this.swap(this.heap, 0, this.heap.length - 1)
        this.heap.pop()
        this.shiftDown(0)
    }
    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }
    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    parent(index) {
        return Math.floor(index - 1 / 2)
    }
    leftChild(index) {
        return index * 2 + 1
    }
    rightChild(index) {
        return index * 2 + 2
    }
}

const heap = new maxHeap

let arr = [5, 10, 20, 30, 400, 1]

heap.buildMaxHeap(arr)
heap.display()

