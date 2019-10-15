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
})