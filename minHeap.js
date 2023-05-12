class minHeap {
    constructor() {
        this.heap = []
    }
    
    swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    minHeap(arr) {
        this.heap = arr
        let end = Math.floor(this.parent(this.heap.length-1))
        for (let i = end; i >= 0; i--) {
            this.shiftDown(i)
        }
    }
    shiftDown(currentIndex) {
        let endIndx = this.heap.length - 1
        let leftIndx = this.leftChild(currentIndex)
        while(leftIndx <= endIndx){
            let rightIndx = this.rightChild(currentIndex)
            let idxToShift
            if(rightIndx <= endIndx && this.heap[rightIndx] < this.heap[leftIndx] ){
                idxToShift = rightIndx
            }else{
                idxToShift = leftIndx
            }
            if(this.heap[currentIndex]>this.heap[idxToShift]){
                this.swap(this.heap,currentIndex,idxToShift)
                currentIndex = idxToShift
                leftIndx = this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }
    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx)
        while(currentIdx > 0 && this.heap[parentIdx]>this.heap[currentIdx]){
            this.swap(this.heap,currentIdx,parentIdx)
            currentIdx = parentIdx
            parentIdx = this.parent(currentIdx)
        }
    }

    peek(){
        return this.heap[0]
    }
    remove(){
         this.swap(this.heap,0,this.heap.length-1)
         this.heap.pop()
         this.shiftDown(0)
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    display(){
        for(let i=0 ; i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    leftChild(i) {
        return (i * 2) + 1
    }
    rightChild(i) {
        return (i * 2) + 2
    }
}

const heap = new minHeap()

let arr = [5,10,20,30,400,1]

heap.minHeap(arr)
heap.display()
heap.remove()
heap.display()
