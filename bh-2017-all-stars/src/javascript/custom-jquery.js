$( document ).ready(function() {
	$(window).load(function(){

	
	
	
	
	
	//--------#whole-screen
		$('#whole-screen img.bgfade').hide();
		var dg_H = $(window).height();
		var dg_W = $(window).width();
		$('#whole-screen').css({'height':dg_H,'width':dg_W});
		
		function anim() {
			$("#whole-screen img.bgfade").first().appendTo('#whole-screen').fadeOut(1500);
			$("#whole-screen img").first().fadeIn(1500);
			setTimeout(anim, 3000);
		}
	anim();
	$(window).resize(function(){window.location.href=window.location.href})
	
	
	
	
	
	//---------#single-div
		$('#single-div img.bgfade').hide();
		
		function animate(){
			$("#single-div #img-background img.bgfade").first().appendTo('#single-div #img-background').fadeOut(1500);
			$("#single-div #img-background img").first().fadeIn(1500);
			setTimeout(animate, 3000);
		}	
	animate();
	

	
	
	
	
	})
});