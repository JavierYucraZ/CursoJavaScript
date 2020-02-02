// Comentario de linea
/* Comentario de bloque  */

//alert("Funcionando");

class Medicamento{

	constructor(nombre, precio, vencimiento){
		this.nombre = nombre;
		this.precio = precio;
		this.vencimiento = vencimiento;
	}

}

class Metodos{

	agregarMedicamento( medicamento ){
		var medList = document.getElementById('contenedorLista');
		var estructuraListado = document.createElement('div');
		estructuraListado.innerHTML = `
			<table>
				<thead>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Vencimiento</th>
					<th>Acciones</th>
				</thead>
				<tbody>
					<tr>
						<td>${medicamento.nombre}</td>
						<td>${medicamento.precio}</td>
						<td>${medicamento.vencimiento}</td>
						<td><a href="#" name="eliminar">Eliminar</a></td>
					</tr>
				</tbody>
			</table>
		`;
		medList.appendChild(estructuraListado);
		this.resetearFormulario();
	}

	resetearFormulario(){
		document.getElementById('form-med').reset();
	}

	eliminarMedicamento( etiqueta ){
		//console.log(etiqueta.parentElement.parentElement);
		
		if (etiqueta.name == "eliminar") {
			etiqueta.parentElement.parentElement.remove();
		}
	}

	mostrarMensaje(){

	}

}


//DOM Document object model
document.getElementById("form-med").addEventListener('submit', function(event){

	var nomMed = document.getElementById('nombre').value;
	var precioMed = document.getElementById('precio').value;
	var yearMed = document.getElementById('fecha').value;

	//console.log(nomMed, precioMed, yearMed);

	var objeto_Medicamento = new Medicamento(nomMed, precioMed, yearMed);

	var metodo = new Metodos();
	metodo.agregarMedicamento(objeto_Medicamento);

	//console.log(objeto_Medicamento);

	event.preventDefault();
});

document.getElementById('contenedorLista').addEventListener('click', function(event){
	//console.log(event.target);
	var metodo = new Metodos();
	metodo.eliminarMedicamento(event.target);
});