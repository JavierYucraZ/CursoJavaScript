document.getElementById('verTodo').addEventListener('click', verCookies);

function verCookies(){
	alert(document.cookie);
}

document.getElementById('crear1').addEventListener('click', crearCookie);
document.getElementById('crear2').addEventListener('click', crearCookie);


function crearCookie(event){
	if (event.target.id == 'crear1') {
		document.cookie = "nombre = Javier";
	}else if(event.target.id == 'crear2'){
		document.cookie = "apellido = Yucra";
	}
}

document.getElementById('borrar1').addEventListener('click', eliminarCookie);
document.getElementById('borrar2').addEventListener('click', eliminarCookie);

function eliminarCookie(event){
	if (event.target.id == "borrar1") {
		document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	}else if(event.target.id == "borrar2"){
		document.cookie = "apellido=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	}
}