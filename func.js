$(function(){

$('.explore').click(function(){
		$('body').animate({ scrollTop: $('#section2').offset().top}, 500)
	})

$(window).scroll(function(){	
	var b=$('body').scrollTop();
	var h=$('#section1').offset().top;
	var a=$('#section2').offset().top;
	var p=$('#section3').offset().top;
	var c=$('#section4').offset().top-80;
		if(b<a){
			$('.logo').text("Dewansh Rawat")
		}
		else if(b>=a && b<p){
			$('.logo').text("About")
			$('.about-line').addClass('appear')
		}
		else if(b>=p && b<c){
			$('.logo').text("Portfolio")
			$('.port-line').addClass('appear')
		}
		else if(b>=c){
			$('.logo').text("Contact Me")
			$('.contact-line').addClass('appear')
		}
   })

	$('.img1').hover(function(){
		$('.img-title1').toggleClass('color-add')
	})
	$('.img2').hover(function(){
		$('.img-title2').toggleClass('color-add')
	})
	$('.img3').hover(function(){
		$('.img-title3').toggleClass('color-add')
	})
	$('.img4').hover(function(){
		$('.img-title4').toggleClass('color-add')
	})
	$('.img5').hover(function(){
		$('.img-title5').toggleClass('color-add')
	})
	$('.img6').hover(function(){
		$('.img-title6').toggleClass('color-add')
	})
	$('.img7').hover(function(){
		$('.img-title7').toggleClass('color-add')
	})
	$('.img8').hover(function(){
		$('.img-title8').toggleClass('color-add')
	})

	$('.img1').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(1.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img2').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(2.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img3').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(3.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img4').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(4.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img5').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(5.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img6').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(6.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img7').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(7.jpg)'
		})
		$('body').addClass('nullflow')
	})
	$('.img8').click(function(){
		$('.gallery').addClass('popup')
		$('.gallery').css({
			'background-image': 'url(8.jpg)'
		})
		$('body').addClass('nullflow')
	})

	$('.gallery').click(function(){
		$('.gallery').removeClass('popup')
		$('body').removeClass('nullflow')
	})

	$('body').keydown(function(){
		$(window).keydown(function(e){
			var x=e.keyCode;
			if(x===27){
			$('.gallery').removeClass('popup')
		$('body').removeClass('nullflow')
			}
			else if(x===38){
				$('.gallery').css({
					'background-image': 'url(1.jpg)'
				})
			}
	})
   })
})