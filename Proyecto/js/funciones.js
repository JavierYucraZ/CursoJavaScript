$(document).ready(function(){
	$('#onload').fadeOut(1500);
	$('body').removeClass('oculto');
});

var equipo = $('#equipo').offset().top, 
	servicio = $('#servicios').offset().top,
	trabajo = $('#trabajo').offset().top,
	contacto = $('#contacto').offset().top;


//on = addEventListener
//jquery - javascript puro

	$('#enlace-inicio').on('click', function(e){
		$('html, body').animate({scrollTop : 0}, 600);
	});

	$('#enlace-equipo').on('click', function(e){
		$('html, body').animate({scrollTop : equipo-100}, 600);
	});

	$('#enlace-servicio').on('click', function(e){
		$('html, body').animate({scrollTop : servicio-100}, 600);
	});

	$('#enlace-trabajo').on('click', function(e){
		$('html, body').animate({scrollTop : trabajo-100}, 600);
	});


	$('#enlace-contacto').on('click', function(e){
		$('html, body').animate({scrollTop : contacto}, 600)
	});
	
$(function(){
	$('.filtro').click(function(){
		$(this).addClass('activo').siblings().removeClass('activo');
		var galeria = $(this).attr('data-nombre');
		if (galeria == 'todos') {
			$('.cont-trabajos').show('1000');
		}else{
			$('.cont-trabajos').filter('.'+galeria).show('1000');
			$('.cont-trabajos').not('.'+galeria).hide('1000');
		}
	});
});


