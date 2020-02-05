function guardarEnLocal(){
	var persona = {
		nombre : "Javier",
		telefono : 70190260,
		correo : "yucrazj@gmail.com"
	}

	localStorage.setItem("objeto_persona", persona);

	localStorage.setItem("objeto_persona_json", JSON.stringify(persona));

	localStorage.setItem('persona_nombre', persona.nombre);
	localStorage.setItem('persona_telefono', persona.telefono);
	localStorage.setItem('persona_correo', persona.correo);

}

guardarEnLocal();


function obtenerInfoLocal(){
	if (localStorage.getItem('objeto_persona_json')) {
		var persona_objeto = JSON.parse(localStorage.getItem('objeto_persona_json'));
		console.log(persona_objeto);
		console.log(persona_objeto.nombre);
		console.log(persona_objeto.telefono);
		console.log(persona_objeto.correo);

		document.getElementById('nombre').innerHTML = persona_objeto.nombre;
		document.getElementById('telefono').innerHTML = persona_objeto.telefono;
		document.getElementById('correo').innerHTML = persona_objeto.correo;

	}else{
		console.log('No existe el registro con la llave seleccionada');
	}
}

obtenerInfoLocal();