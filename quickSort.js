function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length-1 ; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    console.log(left);
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [4,5,-1,20,8,6]
console.log(quickSort(arr));

//complexcity in worst case O(n^2) , average case O(nlogn)
