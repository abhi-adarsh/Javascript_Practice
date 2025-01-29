// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("you are inside div");
// }


// addEventListener
btn1.addEventListener("click", () => {
    console.log("btn1 was click=handler1");
});

const handler2 = () => {  //kisi bhi eventlistener ko remove karne ke liye pahle usko...
    console.log("btn1 was clicked=handler2"); //variable me store krna hoga and than...
}                                             //remove your expected button.
btn1.addEventListener("click", handler2);

btn1.addEventListener("click", () => {
    console.log("btn1 was click=handler3");
});
btn1.addEventListener("click", () => {
    console.log("btn1 was click=handler4");
});

// remove
btn1.removeEventListener("click", handler2 )

// remove
const handler5 = () => {
    console.log("btn1 was clicked-handler5");
}
btn1.addEventListener("click", handler5)

btn1.removeEventListener("click", handler5)