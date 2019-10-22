$(document).ready(function () {

	$('.mobile-btn').on('click',function () {
		$('body').addClass('noscroll');
		$('.nav').addClass('active');

	});

	$('.close-menu').on('click',function () {
		$('body').removeClass('noscroll');
		$('.nav').removeClass('active');

	});

	// Скролл по якорю
	$(".menu").on("click","a", function (e) {

        e.preventDefault();

       	var id  = $(this).attr('href'),
        top = $(id).offset().top;

        $('body').removeClass('noscroll');
        $('.nav').removeClass('active');
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $('a.btn').on("click", function (e) {

        e.preventDefault();

        var id  = $(this).attr('href'),
        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

    // input
    $('.input__field').change(function() {
    	var $this = $(this);
    	var $thisInput = $this.find('input');        
    	if ($this.val() !== "") {
    		$this.addClass('input--filled');
    	} else {
    		$this.removeClass('input--filled');
    	}
    });
})