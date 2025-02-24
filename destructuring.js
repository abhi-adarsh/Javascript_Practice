// let arr = [2, 4, 6, 8, 11, 22, 33, 44];
// let [a, ,c , , ...rest] = arr
// // let a = arr[0] //Addressing
// // let b = arr[1] //Addressing
// // let c = arr[2] //Addressing
// console.log(a, c, rest);

// let {a, b} = {a:1, b:5}
// console.log(a, b)

// let arr1 = [2,3,4,4]
// let obj1 = {...arr1}
// console.log(obj1)

// function sum(v1, v2, v3, v4){
//     return v1 + v2 + v3 + v4
// }
// console.log(sum(...arr1))

let obj2 = {
    name: "Abhishek singh",
    company: "company xyz",
    address: "n zroida"
}
console.log({...obj2, name:"adarsh singh", address:"koila"}) //overlap the objects
console.log({name:"adarsh singh", address:"koila", ...obj2}) //This is not overlap right function


// // object

// const myobject = {
//     a:123,
//     b:"adarsh singh",
//     c:"koila"
// };  
// // console.log({...myobject})
// object.keys(myobject).forEach((i)=> {
//     console.log(myobject[i])
// })