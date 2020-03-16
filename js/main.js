/*
AL CLICK GENERO NUMERI RANDOM DA 1 A 9 E SE IL NUMERO E' MAGGIORE O UGUALE A 5 IL QUADRATO DIVENTA GIALLO
ALTRIMENTI IL QUADRATO DIVENTA VERDE.
IL NUMERO OTTENUTO APPARE AL CENTRO DEL QUADRATO
BONUS: OTTIMIZZARE CON HANDLEBARS
*/

$(document).ready(function() {
    $(".square").click(function(){
        var squareAttivo = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',  //Funzione base per generare numeri random da 0 a 9
            method: 'GET',
            success: function (data) {
                var numeroRandom = data.response;
                if(numeroRandom >= 5){
                    diventaGiallo(squareAttivo, numeroRandom);
                } else {
                    diventaVerde(squareAttivo, numeroRandom);
                }
            },
            error: function(){
                alert('ERRORE');    //In caso di errore generico
            }
        });
    });

    function diventaGiallo(quadratoAttivo, numero){
        quadratoAttivo.empty();
        quadratoAttivo.css("background-color", "yellow");
        quadratoAttivo.append(numero);
    }


    function diventaVerde(quadratoAttivo, numero){
        quadratoAttivo.empty();
        quadratoAttivo.css("background-color", "green");
        quadratoAttivo.append(numero);
    };


});
