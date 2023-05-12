//linear search
let arr = [3, 4, 23, 5, 6, 2];
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 6));
//complexcity = O(n)

//sort
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

//binary search
//arr.sort((a,b)=>a-b) to sort a array

function binarySearch(arr, target) {
  let leftindex = 0;
  let rightindex = arr.length - 1;

  while (leftindex <= rightindex) {
    let middleindex = Math.floor((leftindex + rightindex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      rightindex = middleindex - 1;
    } else {
      leftindex = middleindex + 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr,4));

//recursive Binary search
function recursiveBinary(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftindex, rightindex) {
  if (leftindex > rightindex) {
    return -1;
  }
  while (leftindex <= rightindex) {
    let middleindex = Math.floor((leftindex + rightindex) / 2);
    if (arr[middleindex] === target) {
      return middleindex;
    }
    if (target < arr[middleindex]) {
      return search(arr, target, leftindex, middleindex - 1);
    } else {
      return search(arr, target, middleindex + 1, rightindex);
    }
  }
}

console.log(recursiveBinary(arr, 2));
