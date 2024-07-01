const A: number = 10;
const B: number = 5;

if(A > B){
    console.log(`${A} es mayor que ${B}`)
}else{
    console.log(`${A} es menor que ${B}`)
}

let i: number = 0;
do{
    console.log(i+" elefantes");
    i += 1;
}while(i < A)

let j: number = 0;
while(j < 4){
    console.log(j+ " jirafas");
    j += 1;
}

const C: number = 5;
for(let k: number=0 ; k < C ; k++){
    console.log(k+ " tortugas");
}