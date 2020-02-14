var menu = document.getElementById('nav');
//nos devuelve la distancia del elemento, respecto del borde superior
var altura = menu.offsetTop;

/*console.log(altura);
console.log(window.scrollY);
*/

function pegajoso(){
	if (window.scrollY > altura) {
		menu.classList.add('fijarMenu');
	}else{
		menu.classList.remove('fijarMenu');
	}
}

window.addEventListener('scroll', function(){
	pegajoso();
});

window.addEventListener('load', function(){
	pegajoso();
});
