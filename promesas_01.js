function obtenerPromesa_o_Error(){
    const unaPromesa = new Promise((resolve, reject)=>{
        //const bandera = true;
        const bandera = false;

        if(bandera){
            setTimeout(()=>{resolve("Promesa cumplida")},3000)
        }else{
            reject(new Error("Algo salió mal"))
        }
        
        })

        return unaPromesa
}

console.log(obtenerPromesa_o_Error());
obtenerPromesa_o_Error()
    .then((x)=>{console.log(x)})
    .catch((error)=>{console.log("Error: "+error.message)})