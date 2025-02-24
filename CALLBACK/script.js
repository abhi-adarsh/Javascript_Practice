// function hello () {
//     console.log("hlo");
// }
// setTimeout(hello, 5000)

// Asynchronous method........................

// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(() => {
//     console.log("hello");
// }, 4000)
// console.log("four");
// console.log("five");

// CALLBACK HELL..........Nested callback.......

// function getData(dataId, getNextData){
//     // 2s    
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, () => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3, () => {
//             console.log("getting data 4...CWH");
//         })
//     })
// });


// callback function
// function multiply(a, b){
//     return a*b;
// }
// const newfunc = multiply(3,4)
// console.log(newfunc)

let x = 5;
do {
    console.log(x);
    x--;
}while(x>5);