import { Component, OnInit } from '@angular/core';

declare var SmoothScroll:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
  }

  ngOnInit() {
    /*----------------------------------
    Iniciamos smoothScroll
    --------------------------------*/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels    
    });
    
    $(window).scroll(function () {
      // grosor de menu
      var nav = $('#menu');
      var bar = $('#bar-contact');
      var position_bar = bar.position();
      var top_position = position_bar.top + bar.height();
      var scroll = $(window).scrollTop();

      /*---------------------------------
          OCULTAR Y MOSTRAR BOTON IR ARRIBA
      ----------------------------------*/
      if (scroll >= top_position + 50) {
          $(".ir-arriba").fadeIn();
      } else {
          $(".ir-arriba").fadeOut();
      }
      /*---------------------------------
          CABECERA FIJA
      ----------------------------------*/
      if (scroll >= top_position) {
          nav.addClass("fixed-top");
          $('#index').addClass("index-margin");
      } else {
          nav.removeClass("fixed-top");
          $('#index').removeClass("index-margin");
      }
      /*---------------------------------
        CABECERA ANIMADA
      ----------------------------------*/
      if (scroll >= top_position + 40) {
          nav.addClass("cabecera-scroll");
      } else {
          nav.removeClass("cabecera-scroll");
      }
    });
  }
}
