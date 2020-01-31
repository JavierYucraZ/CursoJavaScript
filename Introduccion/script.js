console.log("Hola mundo");

var nombre = "Javier";
console.log(typeof nombre);

console.log(nombre.length);

var apellido = "Yucra";

console.log(nombre);
console.log(apellido);

var nombre_completo = nombre+' '+apellido;

console.log(nombre_completo);


class Persona{
	name = "";
	lastname = "";

	constructor(name, lastname){
		this.name = name;
		this.lastname = lastname;
	}

}

var objetoPersona = new Persona("Javier", "Yucra");
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

h1.innerHTML = objetoPersona.name;
h2.innerHTML = objetoPersona.lastname;

var direccion = new String("Sopocachi");
console.log(direccion);
console.log(typeof direccion);


var var1 = "Hola";
var VAR1 = "mundo";

console.log(" var1 es igual a VAR1? " + " -> "+ (var1 === VAR1));


var ciudades = ["La Paz", 'Santa Cruz', "Cochabamba"];
console.log(ciudades);

for(var i = 0; i < ciudades.length; i++){
	console.log(ciudades[i]);
}





