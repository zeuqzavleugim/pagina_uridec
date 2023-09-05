var form1 = document.getElementById('end');
    form1.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'index.html'
    });

var form2 = document.getElementById('boton1');
    form2.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'formulario.html'
    });

var form3 = document.getElementById('boton2');
    form3.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'archivos.html'
    });