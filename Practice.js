// Q.1check if the number is a multiple of 5 or NOT
// let num = prompt("enter a number");

// if(num%5===0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is NOT multiple of 5");
// }

// Q.2Given grades to students according to thier scode.
// 90-100,70-89,60-69,50-59,0-49

let score = 59;
let grade;

if (score >= 90 && score <= 100) { 
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}

console.log("Acoording to your score & grade was:", grade);

// let score = 29;
// let grade = score >= 90 ? "A" :
//             score >= 70 ? "B" :
//             score >= 60 ? "C" :
//             score >= 50 ? "D" : "F";

// console.log(`According to your score, your grade is: ${grade}`);

// let score = parseInt(prompt("enter a number"))
// let grade = score >= 90 ? "A" :
//             score >= 70 ? "B" :
//             score >= 60 ? "C" :
//             score >= 50 ? "D" : "F";
// console.log("According to your score , your grade was", grade);

// Q.3 Find average marks of entire class. - array[85,97,44,37,76,60]

// let arr = [85,97,44,37,76,60];
