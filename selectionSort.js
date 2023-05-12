let arr = [4, 6, 2, 4, 8, 1]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j
            }
        }
        let temp = arr[i]
        arr[i]= arr[smallIndex]
        arr[smallIndex] = temp
    }
}

selectionSort(arr)
console.log(arr);

//complexcity O(n^2)