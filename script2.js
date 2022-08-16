//Annonymous Functions and Callback
// // // define functions that add, subtract, multipy, divide:

// // const add = (x,y) => {
// //     return x + y;
// // }

// // const sub = (x, y) => {
// //     return x + y;
// // }

// // const mul = (x,  y) => {
// //     return x + y;
// // }

// // const div = (x, y) => {
// //     return x + y;
// // }

// // const apply = (x, y, fn) => { // fn is the callback function
// //     const val = fn(x,y);
// //     return val;
// // // }

// // const result = apply(2,3,add); //5
// // console.log(result);

// // const r1 = apply(3, 4, add);  // 7
// // const r2 = apply(20, 5, sub); // 15
// // const r3 = apply(4, 7, mul);  // 28
// // const r4 = apply(99, 9, div); // 11


// // algorithm for adding all the numbers in an Array:

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let result = nums[0];
// // for (let i = 1; i < nums.length; i++) {
// //     result = result +nums[i];
// // }
// const reduce = (arr, fn) => {
//     let total = arr[0];
//     for (let i =1; i < arr.length; +ii) {
//         total = fn(total, arr[i]);
//     }

//     return total;
// }

// const r1 = reduce(nums, add);  
// const r2 = reduce(nums, sub); 
// const r3 = reduce(nums, mul); 
// const r4 = reduce(nums, div);

// console.log(r1,r2,r3,r4);

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10















// Map Method
// const arr = [2, 4, 6, 8];

// const newArr = arr.map(x => x * 2);

// const newArr2 = arr.map((x, index => {
//     console.log("The index of the item is" + index);
//     return x * 3;
// })
// console.log(newArr2, arr)

// Filter Method

const animals = ["cat", "dog", "duck", "goose"];

// Filter all ducks out of farm!

// const newAnimals = animals.filter(animal => {
//     return animal != "duck";
// })
// // console.log(newAnimals);
// // // ["cat", "dog" "goose"]

// const someNums = [1, 2, 3, 4, 5, 6];

// const evenNums = someNums.filter(x => {
//     //check if x is even
//     return x % 2 == 0
// });

// const oddNums = someNums.filter( x => {
//     //check if x is odd
//     return x % 2 ==1
// })
// console.log(oddNums)

const names = ["super", "Josiah", "Susan"]

const namesHTML = names.map(aName => {
    return <li>${aName}</li>
})

console.log(namesHTML.join(""));

const myArrowFunc = (aParam) => `Hello ${aParam}!`;

function declaredFunc(aParam) {
    return `Hello ${aParam}!`
}

console.log(myArrowFunc("Sakyra"));
console.log(declaredFunc("Josiah"));
