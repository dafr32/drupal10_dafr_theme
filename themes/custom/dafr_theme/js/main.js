/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

    'use strict';
    
    // sticky menu 
    Drupal.behaviors.headerScroll = {
        attach: function (context, settings) {
            var $header = $('#header.header-3');
            var lastScrollTop = 0;

            $(window).on('scroll.headerScroll', function () {
                var scrollTop = $(this).scrollTop();                
                if (lastScrollTop > 100 && scrollTop > lastScrollTop) {
                    // Scrolling down
                    // $header.addClass('transparent');
                    $header.addClass('hide-up');
                    // $header.removeClass('stick-fixed');
                } else {
                    if (scrollTop < 100) {
                        $header.addClass('transparent top');
                    } else {
                        $header.removeClass('hide-up');
                        $header.removeClass('transparent');
                        $header.removeClass('top');
                        $header.addClass('scroll-up')
                    }
                    // Scrolling up          
                    // $header.removeClass('transparent');

                    // $header.addClass('stick-fixed');         

                }

                lastScrollTop = scrollTop;
            });
        }
    };

})(jQuery,Drupal);