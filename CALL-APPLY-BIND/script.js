const userDetails = {
    name: "Abhishek-singh",
    age:23,
    email: "abhishek@TCS.com",
    Desinations:"software engineer"
    
}
let printDetails=function(){
    console.log(this);
}
// console.log(userDetails.name)
// userDetails.printDetails();

printDetails.call(userDetails);

let userDetails2 = {
    name: "Adarsh-singh",
    age:25,
    email: "adarsh@TCS.com",
    Desinations:"software engineer"

}
// // function borrowing
printDetails.call(userDetails2,"Delhi", "India");

// Apply
printDetails.apply(userDetails2,["Delhi","Bihar"]);

// Bind
let newfun = printDetails.bind(userDetails2,"Delhi","Panjab")
console.log(newfun)
