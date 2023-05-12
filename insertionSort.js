let arr = [2, 5, 4, 1, -10, 89, 4];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}
insertionSort(arr);
console.log(arr);

//complexcity o(n^2)