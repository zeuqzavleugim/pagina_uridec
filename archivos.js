var form1 = document.getElementById('end');
    form1.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'https://zeuqzavleugim.github.io/pagina_uridec/'
    });

var form2 = document.getElementById('atras');
    form2.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'botones.html'
    });

var form3 = document.getElementById("subir");
    form3.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.reload();
    });