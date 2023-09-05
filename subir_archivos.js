const subArchivo = [];

async function archivos(){
  
    const {value: file}  = await Swal.fire({
        html: "<h1>subir archivo para expediente</h1>",
        input: "file", 
        inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value) {
                resolve()
              } else {
                resolve('Por favor, Seleccione un documento')
              }
            })
          },
        inputAttributes:{"accept": ".docx , .pdf"},
        confirmButtonText: "Aceptar",
        showCloseButton: true
    });

    if(file.inputValidator == file.value){
      var resultado = confirm("Realmente desea agregar este documento?")
      if(resultado === true ){
        return Swal.fire({
          icon:"success",
          title:"El documento se ha agregado exitosamente!!",
          showConfirmButton: false,
          showCloseButton: true
      }), setTimeout(() => {
          subArchivo.push("Archivo subido con exito!");
          document.getElementById("listo").innerHTML=subArchivo;
      }, 1000);
      } else{
        return Swal.fire({
          icon:"error",
          title:"fin del proceso, ningun documento seleccionado!!",
          showConfirmButton: false,
          showCloseButton: true
      });
      } 
    }
}