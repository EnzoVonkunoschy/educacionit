//#0703 
function obtenerPromesa_o_Error(){
    const unaPromesa = new Promise((resolve, reject)=>{
            const bandera = true;
            //const bandera = false;

            if(bandera){
                setTimeout(()=>{resolve("Promesa cumplida")},3000)
            }else{
                reject("Algo salió mal")
            }
        })
        return unaPromesa
}

    console.log(obtenerPromesa_o_Error());

    var objetoPromesa = obtenerPromesa_o_Error();
    
    objetoPromesa
    .then((resultado) => {
        console.log("Promesa cumplida:", resultado);
    })
    .catch((error) => {
        console.log("Error-->:"+error.message);
    });

process.on('uncaughtException', e => {
    console.log('process on --> error:', e.message)
})