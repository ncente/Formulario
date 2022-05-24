window.addEventListener('load', function(){
    let form = document.querySelector('form.formulario');

    form.addEventListener('submit', function(e){
        //e.preventDefault();
        let errores = [];

        let campoName = document.querySelector('input.name');
        if(campoName.value == ''){
            errores.push("El campo nombre esta vacio")
        } else if (campoName.value.length < 3) {
            errores.push('El campo nombre debe contener 5 ó más caracteres')
        }

        let campoFecha = document.querySelector('input.fecha');
        if(campoFecha.value == ''){
            errores.push("El campo fecha esta vacio")
        }

        let campoMensaje = document.querySelector('#comentarios-input');
        if(campoMensaje.value == ''){
            errores.push("El campo mensaje esta vacio")
        }
        
        if(errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }

    })
})