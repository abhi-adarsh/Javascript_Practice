// let num = prompt("Enter a number")

// if(num%5===0){
//     console.log(num, "is multiple of 5");
// }else{
//     console.log(num, "is NOT multiple of 5");
// }

// 90-100,70-89,60-69,50-59,0-49

let score = prompt("Enter a number");
let grade

if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D"
}else if(score>=0 && score<=49){
    grade="F"
}
console.log(score, "According to your score & grade:", grade);