function FuncionSaludo(){
	alert("Hola desde una alerta");	
}

function FuncionConParametro( nombre ){
	alert("Hola "+nombre+", desde mi alerta");	
}

function atraparParametro( parametro ){
	var nombre = parametro.value;
	alert("Atrapando el parametro " +nombre+ " desde una caja de texto");
}

function atraparParametro2( parametro ){
	var nombre = parametro.value;
	var saludo = "Hola "+nombre.toUpperCase();

	document.getElementById('resultado').innerHTML = saludo;
}