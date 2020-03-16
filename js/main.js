/*
AL CLICK GENERO NUMERI RANDOM DA 1 A 9 E SE IL NUMERO E' MAGGIORE O UGUALE A 5 IL QUADRATO DIVENTA GIALLO
ALTRIMENTI IL QUADRATO DIVENTA VERDE.
IL NUMERO OTTENUTO APPARE AL CENTRO DEL QUADRATO
BONUS: OTTIMIZZARE CON HANDLEBARS
*/

$(document).ready(function() {


    //HANDLEBARS

    var source = $('#square-template').html();
    var template = Handlebars.compile(source);

    for(i = 0; i < 36; i++) {
        $('.container').append(source);
    }


    $(".square").click(function(){
        var squareAttivo = $(this);                                         //Do nome a il riquadro cliccato così da poterlo riusare
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',  //Funzione base per generare numeri random da 0 a 9
            method: 'GET',
            success: function (data) {
                var numeroRandom = data.response;
                if(numeroRandom >= 5){                                      //Funzione if che se sopra o pari a 5 richiamo il giallo, sotto il verde
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
        quadratoAttivo.empty();                                     //Pulizia del vecchio quadrato (in caso ricliccassi)
        quadratoAttivo.css("background-color", "yellow");           //Do il background giallo con css
        quadratoAttivo.append(numero);                              //Inserisco il numero all'interno del quadrato attivo
    }


    function diventaVerde(quadratoAttivo, numero){
        quadratoAttivo.empty();
        quadratoAttivo.css("background-color", "green");
        quadratoAttivo.append(numero);
    };





});
