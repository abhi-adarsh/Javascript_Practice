// forEach................. 

// const coding = ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);


// filter................

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 7)
// console.log(newNums);

// const mynums = [1,2,3,4,5,6,7,8,9]
// const newnums = mynums.filter((num)=> num >3)
// console.log(newnums)

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const values = numbers.filter( (num) => num > 5)
// console.log(values);

// const values = numbers.filter( (num) => {
//     return num > 7
// });

// const newNums = []
// const newNums = numbers.forEach( () => {
//     if (Number > 5){
//         newNums.push(number)
//     }
// })
// console.log(newNums);

// Q..........

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const userBooks = books.filter( (bk) => bk.genre === "Non-Fiction") 
// console.log(userBooks);

// const booksId = books.filter( (kitab) => kitab.genre === "History")
// console.log(booksId);

// const bkuserId = books.filter( (book) => book.genre === "Science")
// console.log(bkuserId);

// const userBooks = books.filter( (bk) => {
//     return bk.publish > 1990 && bk.genre === "Non-Fiction"
// })
// console.log(userBooks);

// Map function..............

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = numbers.map( (num) => {return num + 10})
// console.log(newNums);

// const values = numbers.map( (num) => num + 9)
// console.log(values);

// Map,filter,reduce...........

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const result = numbers.map( (num) => num * 10)
//                         .map( (num) => num + 5)
//                         .filter( (num) => num >= 7)
//     console.log(result);

// Reduce...............

// const myNums = [1,2,3];
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log('acc: ${acc} and currval: ${currval}');
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc+currval)

// console.log(myTotal);


// Q...............

// const shoppingCart = [
//     {
//         itemName: "JS course",
//         price: 1499
//     },
//     {
//         itemName: "PY course",
//         price: 999
//     },
//     {
//         itemName: "JAVA course",
//         price: 999
//     },
//     {
//         itemName: "HTML course",
//         price: 499
//     }
// ]
// const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(totalPrice);