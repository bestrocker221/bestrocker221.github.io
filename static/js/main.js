(function($){
	$(document).ready(function(){
		//Empty space. Fill this with your site specific JS code
		$(window).scroll(function () {
	      //if you hard code, then use console
	      //.log to determine when you want the 
	      //nav bar to stick.  
	      //console.log($(window).scrollTop())  //240


	      if ($(window).scrollTop() > 220) {
		      $('.menu').addClass('menu-fixed');
		    }
		  if ($(window).scrollTop() < 221) {
		      $('.menu').removeClass('menu-fixed');
		    }
		});


	});


})(jQuery);


/* FOR CODE BOX  */
