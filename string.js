let a ='hai welcome to programming'

let b =a.split(' ')
console.log(b);

let abc= b.map((element)=>{
    console.log(element.split('').reverse().join(''));
    return element.split('').reverse().join('')
}).join(' ')
console.log(abc);

let arr=[4,444,3333,455]
arr = arr.slice(1,2)
let arr2 =['fff']
let ne = arr.concat(arr2)

arr.unshift(10)
arr2=arr.pop(2)
arr.slice(2,4)
arr.splice(2,2,5000,8000,7888,44)

console.log(arr);

//array method 
// 1.split 
// 2.slice
// 3.splice
// 4.reverse
// 5.join
// 6.shift
// 7.unshift
// 8.push
// 9.pop
