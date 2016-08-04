$(document).ready(function(){

    var bounce = function(){
        $('#bounce-icon').effect('bounce', {times: 5}, 2000);
    }

    setTimeout(bounce, 700);

   var target = $('#target');
   $(document).click(function() {
        if (target.hasClass('in')) {
             target.css('height', '1px');
             target.removeClass('in');
        } else {
            console.log('closed');
        }
   });
  
    $(window).scroll(function() {
        var scroll_top =$(this).scrollTop();
        var skillsTop = $('.Skills').offset().top;
        var bottom = skillsTop + $('.Skills').outerHeight();
        if (scroll_top > skillsTop && scroll_top < bottom) {
            $('.Img').addClass('up');
        } else {
            $('.Img').removeClass('up');
        }
    });
    
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
        $target.css('height','1px');
	});
   
    $('#bounce-icon').click(function() {
        bounce();
    });

});