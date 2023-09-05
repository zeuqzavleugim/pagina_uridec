
var form = document.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault()
        var usuario = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var myUsuario = "miguel"
        var myPassword = "12345678"
        console.log(usuario)
        console.log(password)
        console.log(myUsuario)
        console.log(myPassword)
        if(usuario == myUsuario && password == myPassword){
            return window.location.href = 'botones.html';
        }else if(usuario == myUsuario && password != myPassword){
            alert('Contraseña erronea');
            return false;
        }else if(usuario != myUsuario && password == myPassword){
            alert('usuario invalido');
            return false;
        }else{
            alert('Usuario o contraseña invalidos');
            console.log(usuario);
            return false;
        }
            });



