let p = fetch("https://www.boredapi.com/api/activity")

p.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})