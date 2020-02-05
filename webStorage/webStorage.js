if (typeof(Storage) != "undefined") {


	if (localStorage.getItem("usuario")) {
		document.getElementById('saludo').innerHTML = "Bienvenido de nuevo "+localStorage.getItem("usuario");
	}else{
		var nombre = prompt('Ingresa tu nombre');
		localStorage.setItem("usuario", nombre);
		document.getElementById('saludo').innerHTML = "Bienvenido "+localStorage.getItem("usuario");
	}

	if (!sessionStorage.getItem('contador')) {
		sessionStorage.setItem("contador", "0");
	}

	document.getElementById("contador").innerHTML = "Contador : "+sessionStorage.getItem("contador");


	document.getElementById('inc').addEventListener('click', incrementar);
	document.getElementById('desc').addEventListener('click', decrementar);
	document.getElementById('salir').addEventListener('click', salir);
}else{
	alert("El navegador no soporta LocalStorage");
}

function incrementar(){
	var contadorNumerico = Number(sessionStorage.getItem('contador'));
	sessionStorage.setItem("contador", contadorNumerico+1);
	document.getElementById('contador').innerHTML = "Contador : "+sessionStorage.getItem("contador");
}

function decrementar(){
	var contadorNumerico = Number(sessionStorage.getItem('contador'));
	sessionStorage.setItem("contador", contadorNumerico-1);
	document.getElementById('contador').innerHTML = "Contador : "+sessionStorage.getItem("contador");
}

function salir(){
	alert("Cerrando sesion de : "+localStorage.getItem("usuario"));
	
	//localStorage.clear();
	localStorage.removeItem("usuario");
	sessionStorage.removeItem("contador");

	document.getElementById('saludo').innerHTML = "";
	document.getElementById('contador').innerHTML = "Contador en 0";
}


