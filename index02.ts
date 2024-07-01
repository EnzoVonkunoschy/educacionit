const nombres: string[] = [];

nombres[0] = "Luis";
nombres[1] = "Paula";
nombres.push("Pedro");
nombres.push("María");
nombres.push("Juan");

console.log(nombres)

for(let i: number = 0 ; i<nombres.length ; i++){
    console.log(nombres[i]);
}

console.log("Con forEach ---------------")
nombres.forEach((x: string)=>{
    console.log(x)
})

console.log("Con for-of ----------------")
for(const x of nombres){
    console.log(x)
}
