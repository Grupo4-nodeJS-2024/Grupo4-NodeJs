"use strict";
          if (annyang) {
            // Definimos nuestro primer comando. Primero escribimos el comando y posteriormente la función a ejecutar.
            //api google AIzaSyCer2C9iE2qvsnCOm6cjGlEuYJRvqw18y0
            //buscador facebook: https://www.facebook.com/search/top/?q=
            //buscador google: https://www.google.com/search?q=
            var commandos = {
    
                'abajo': function() {
                 window.location.href = "#abajo";
    
              },
                'arriba': function() {
                window.location.href = "#";
    
              },
                'siguiente': function() {
                document.getElementById("siguiente").click();
    
              },
                'anterior': function() {
                document.getElementById("anterior").click();
    
              },
              'cabecera': function() {
                window.location.href = "#cabecera_1";
    
              },
              'imagen uno': function() {
                window.location.href = "#foto_1";
    
              },
              'imagen dos': function() {
                window.location.href = "#foto_2";
    
              },
              'imagen tres': function() {
                window.location.href = "#foto_3";
    
              },
              'enlace uno': function() {
                document.getElementById("enlace_1").click();
    
              },
              'enlace dos': function() {
                document.getElementById("enlace_2").click();
    
              },
              'enlace tres': function() {
                document.getElementById("enlace_3").click();
    
              },
              'buscar': function() {
                document.getElementById("buscador").select();
                document.getElementById("start-record-btn").click();
    
              },
              'buscar texto': function() {
                document.getElementById("enviar").click();
    
              },
              'facebook': function() {
                document.getElementById("facebook").click();
              },
              'instagram': function() {
                document.getElementById("instagram").click();
              },
              'como llego': function() {
                document.getElementById("llegar").click();
              },
              'contacto': function() {
                document.getElementById("contacto").click();
              },
              'nutricion': function() {
                document.getElementById("nutricion").click();
              },
              'iniciar': function() {
                document.getElementById("ini").click();
              },
              'compras': function() {
                document.getElementById("compras2").click();
              },
          'video':playVideo,
          'detener':pausaVideo,   
              'eliminar texto': function cambiaValores() {
                document.getElementById("buscador").value = "";
              }
    
            }
    
            // OPCIONAL: active el modo de depuración para un registro detallado en la consola
            annyang.debug();
    
            // Agregamos nuestros comandos a annyang.
            annyang.addCommands(commandos);
    
            //Establecemos el lenguaje, en mi caso es español de México (puedes ver la lista completa de lenguajes soportados aquí).
            annyang.setLanguage("es-AR");
    
            // Empezmaos a escuchar.
            annyang.start();
         } else {
        $(document).ready(function() {
          $('#unsupported').fadeIn('fast');
        });
      }
    
    
      var vid=document.getElementById("myvideo");
          function playVideo() {
            //alert("reproducion");
            vid.play();
              };
          function pausaVideo() {
            vid.pause();
              };
         var scrollTo = function(identifier, speed) {
        $('html, body').animate({
            scrollTop: $(identifier).offset().top
        }, speed || 1000);
      }