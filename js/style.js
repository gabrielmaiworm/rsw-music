// Função Alto Contraste
checaContraste(); // verifico o status do contraste ao iniciar o DOM
var teste = document.getElementsByClassName("altocontraste");
for (var i = 0; i < teste.length; i++) {
    teste[i].addEventListener("click", ativaContraste);
}

function checaContraste() {
    var status = localStorage.getItem('contraste');

    if (status == 'false') {
        document.body.classList.remove('contraste');
    } else {
        document.body.classList.add('contraste');
    }
}

function ativaContraste(evt) {
    evt.preventDefault();

    var statusContraste = document.body.classList.toggle("contraste");
    localStorage.setItem('contraste',statusContraste); // grava o status do click

    console.log("contraste: " + statusContraste);
}

// localStorage.setItem('lastname','Smith'); // gravar
// Storage.removeItem('lastname');           // apaga a entrada "lastname"
// Storage.clear();                          // apaga tudo o que está no local storage
// localStorage.getItem('lastname');         // recupera o que está no local storage



// Google Maps
function initMap() {
    // The location of Petrópolis
    var uluru = {
        lat: -22.511,
        lng: -43.177
    };
    // The map, centered at Petrópolis
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
    });

    // The marker, positioned at Petrópolis
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}