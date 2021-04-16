 (function() { 
 let equipo = $('equipo').offset().top,
    servicio = $('servicio').offset().top,
     trabajo = $('trabajo').offset().top,
     contacto = $('contacto').offset().top;

     window.addEventListener('resize', function () {

         equipo = $('equipo').offset().top,
             servicio = $('servicio').offset().top,
             trabajo = $('trabajo').offset().top,
             contacto = $('contacto').offset().top;
             
     });
        $ ('#enlace-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:0
            },600);
         });
        $('#enlace-equipo').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:equipo
            },600);
         });
     });