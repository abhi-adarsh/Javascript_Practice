//...........Function..........//
// function newFunction(){
//     console.log("A")
//     console.log("B")
//     console.log("H")
//     console.log("I")
//     console.log("S")
//     console.log("H")
//     console.log("E")
//     console.log("K")
// }
// newFunction()
// newFunction()

// function AddTwoNumbers(number1, number2){  //Pass Parameters
//     console.log(number1+number2)
// }
// AddTwoNumbers(5, 4)  //Pass Arguments

// function AddTwoString(string1, string2){ //Pass Parameters
//     console.log(string1+string2)
// }
// AddTwoNumbers("abhi", " singh")  //Pass Arguments

// function AddTwoNumbers(x, y){
//     console.log(x+y);
// } 
// AddTwoNumbers(4,6)

// ................Return method................
// function sum(x, y){
//     s = (x+y);
//     return s;
// }
// let val = sum(6,3);
// console.log(val);

//................Arrow function............
// function adarsh(){
//     let username = "Abhishek"
//     console.log(this.username);
// }
// adarsh()

// const user = {
//     username : "abhishek",
//     price : 980,
    
//     welcomeMessage : function() {
//         console.log('${this.username}, wel come to the my page');
//     }
// }
// user.welcomeMessage()

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}