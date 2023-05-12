class heapSort {
    constructor() {
        this.heap = []
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
    buildHeap(arr) {
        this.heap = arr
        let endParent = this.parent(this.heap.length - 1)
        let endIdx = this.heap.length - 1
        for (let i = endParent; i >= 0; i--) {
            this.shiftDown(i, endIdx)
        }
    }
    shiftDown(currentIdx, endidx) {
        let leftChild = this.leftChild(currentIdx)
        while (leftChild <= endidx) {
            let rightChild = this.rightChild(currentIdx)
            let idxToShift
            if (rightChild <= endidx && this.heap[rightChild] > this.heap[leftChild]) {
                idxToShift = rightChild
            } else {
                idxToShift = leftChild
            }
            if (this.heap[currentIdx] < this.heap[idxToShift]) {
                let temp = this.heap[currentIdx]
                this.heap[currentIdx] = this.heap[idxToShift]
                this.heap[idxToShift] = temp

                currentIdx = idxToShift
                leftChild = this.leftChild(currentIdx)
            }else{
                return
            }
        }
    }
    heapSort(arr){
       this.buildHeap(arr)
        for(let i = this.heap.length-1 ; i>=0;i--){
            let temp = this.heap[0]
             this.heap[0] =this.heap[i] 
            this.heap[i] = temp
            this.shiftDown(0,i-1)
        }
        return this.heap
    }
}
let arr = [5, 10, 20, 30, 400, 1]
const sort = new heapSort()
console.log(sort.heapSort(arr));