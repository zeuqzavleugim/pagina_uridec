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

function bototnes(pagina){
    switch(pagina){
        case 'subir':
            window.location.reload();
            break;
    }
}