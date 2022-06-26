jQuery(document).ready(function($){

	jQuery('.owl-carousel').owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

    
   /* one page nav */
    $('.carosol_txtarea').singlePageNav({
        offset: '-50',
        filter: ':not(.external)',
        easing: 'linear',
    });
    // end of one page nav

});