let arr = [2,500, 3, 23, 1, 2, 9];

function bubblesort(arr){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j+1] = temp;
        }
      }
    }
    return arr
}

bubblesort(arr)
console.log(arr);
//complexcity O(n^2)
