import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var WOW:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    }

  ngOnInit() { 
    /*----------------------------------
    Iniciamos WOW
    --------------------------------*/
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    $('#slide').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false,
        autoHeight: true,

        navText: ['<i class="fa fa-arrow-left borde" title="Anterior"></i>', '<i class="fa fa-arrow-right borde" title="Siguiente"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1,
                margin: 20
            },
            800: {
                items: 1,
                margin: 20
            }
        }
    });
    $('#slide').on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2; // Position of the current item
        $('h3').removeClass('animated bounceInLeft');
        $('h4').removeClass('animated bounceInLeft');
        //Se quita el estilo para evitar errores en la animacion
        $('h3').css('animation-name', '');
        $('h4').css('animation-name', '');

        $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated bounceInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated bounceInLeft');
    });
    $('#soluciones').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" title="Anterior"></i>', '<i class="fa fa-arrow-right " title="Siguiente"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2,
                margin: 20
            },
            800: {
                items: 3,
                margin: 20
            }
        }
    });
  }

}
