// Objects............

const mySym = Symbol("key1")

const myobj = {
    name: "Abhishek",
    age: 23,
    email: "abhishek@gmail.com",
    [mySym]: "mykey1",
    location: "Subharti"
}
console.log(myobj.name)
console.log(myobj["email"])
console.log(myobj.mySym)

myobj.email = "Adarsh@gmail.com"
// Object.freeze(myobj)
myobj.email = "sonu@gmail.com"
console.log(myobj)

myobj.greeting = function(){
    console.log("Hello abhishek")
}
console.log(myobj.greeting)