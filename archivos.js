var form1 = document.getElementById('end');
    form1.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'index.html'
    });

var form2 = document.getElementById('atras');
    form2.addEventListener('submit', function(event){
        event.preventDefault()
        return window.location.href = 'botones.html'
    });