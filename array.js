// //............Array.............//
// const myHeros = ["Shaktiman","Flash","Thanosh","Spiderman"]
// const myArr = [1,2,3,4,5]
// const myArr2 = new Array(1,2,3,4,5,6,7)

// // console.log(myHeros[0]);
// // console.log(myArr[3]);

// myArr.push(88); //Add Random Numbers
// myArr.pop()    //Remove Add This Numbers
// // console.log(myArr)

// myArr2.unshift(90)  //Add Random Numbers
// // myArr2.shift()     //Remove Add This Numbers
// // console.log(myArr)

// // console.log(myArr2.includes(90));  //True & False
// // console.log(myArr2.indexOf(3))    //Exist H ki Nhi

// // const newArr = myArr.join() //bind and convert to string
// // console.log(myArr);
// // console.log(typeof newArr)

// // console.log("A " ,  myArr);
// const myn1 = myArr.slice(1,3)
// // console.log(myn1)

// //..........Part 2............//
// const marvels_heros = ["Thor","Ironman","Spiderman"]
// const dc_heros = ["Superman","Flash","Batman"]

// // marvels_heros.push(dc_heros);
// // console.log(marvels_heros)

// // const allHeros = marvels_heros.concat(dc_heros)  //Using Concat Operator
// // console.log(allHeros)

// // const all_new_heros = [...marvels_heros, ...dc_heros]  // Using Spread Operator
// // console.log(all_new_heros)

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));

// let text1 = "Abhishek";
// let text2 = "Adarsh";
// let text3 = text.trim();
// console.log(text3)

// let text1 = "     Abhishek kumar       ";
// let text2 = text1.trimStart();
// console.log(text2);

// console.log("-4"+5+4)
// console.log(4+5+"4")

// function newFunction(){
//     console.log("A")
//     console.log("D")
//     console.log("A")
//     console.log("R")
//     console.log("S")
//     console.log("H")
// }
// newFunction()

// console.log("5"*"5"-"7" + "4")

// let text1 = [12,11,32,43,54];
// console.log(text1.length);

// let arr = [21,23,34,45,65];
// console.log(arr);
// console.log(arr[2]);

// let heros = ["thor","shaktiman","hulk","ironman","spiderman","antman"]
// console.log(heros);
// console.log(heros.length);

// console.log(heros[0]);
// console.log(heros[1]);
// console.log(heros[2]);
// console.log(heros[3]);
// console.log(heros[4]);
// console.log(heros[5]);

// // .............ITERABLE loop..................

// for(i=0;i<6;i++){
//     console.log(heros[i]);
// }

// let cities = ["mumbai","delhi","pune","hyderbad","bihar"];
// for (let city of cities){
//     console.log(city);
// }

// let Numberies = [12,23,34,45,56,65];
// for (let Number of Numberies){
//     console.log(Number);
// }

// console.log("4"+"5"+2+4);

// console.log(3+4+"4"-"7"+4);

// .................Array Method In JS............//
// let foodItems = ["potato","apple","chips","tomato"];
// foodItems.push("burger","paneer")
// console.log(foodItems);

// foodItems.pop();
// console.log(foodItems);

// foodItems.unshift("orange");
// console.log(foodItems);

// foodItems.shift()
// console.log(foodItems);

// console.log(foodItems.toString());

// let marks = [21,23,34,45,65];
// console.log(marks.toString());

// let marvels_heros = ["spiderman","ironman","flash","antman"];
// let dc_heros = ["batman","superman"];
// let Heros = marvels_heros.concat(dc_heros)
// console.log(Heros);

// let food = ["apple","banana","orange"];
// let nonveg = ["chicken","mutton"];
// let khana = food.concat(nonveg);
// console.log(khana);

// let marvels_heros = ["superman","salman ka fan","antman","spiderman"]
// let val = marvels_heros.concat(marvels_heros);
// console.log(val);

// let company = ["TCS","Microsot","Uber","Google","IBM","Energize"];
// let arr = company.unshift("TCS");
// console.log(arr);

// let arr = [1,2,3,4,5];

// // let emp= arr=[]
// console.log(emp);

// let a = 20,
//   b = 30,
//   c = [{}, [{}], [1, 2, 3, 3, 4, 4], {}];
// d = arr = {};
// console.log(c.push(6,7,88,8));
// // console.log((c.length = 0));

// let a = 20,
//   b = 30,
//   c = [{}, [{}], [1, 2, 3, 3, 4, 4], {}];
// d = arr = {};
// console.log((c["1333"] = 4));
// console.log((c.length = 0));

// console.log(arr);

// let a = 10,
//   b = 20,
//   c = 30;
// console.log(c)

// let a = 1999 // 1+9+9+9 =28


// const arrnum =[1,2,3,4];
// const newarr = arrnum.map((num)=>num+2)
// console.log(newarr)

// const newarr = arrnum.filter((num)=>num ===2)
// console.log(newarr)

// let num = prompt("Enter a number")
// if(num%5===0){
//     console.log(num, "is multiple of 5")
// }else{
//     console.log(num, "is NOT multiple of 5")
// }