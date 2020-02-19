class Persona{
	protected nombre : string = "";
	protected apellido : string = "";

	constructor( nombre : string, apellido : string) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

	public get Nombre() : string {
		return this.nombre;
	}

	public get Apellido() : string {
		return this.apellido;
	}

	public set Nombre(v : string) {
		this.nombre = v;
	}

	public set Apellido(v : string) {
		this.apellido = v;
	}

}

let persona1 = new Persona('Javier', 'Yucra');

class Empleado extends Persona{
	private cargo : string = "";
	private antiguedad : string = "";

	constructor(nombre: string, apellido:string, cargo : string, antiguedad : string){
		super(nombre, apellido);
		this.cargo = cargo;
		this.antiguedad = antiguedad;
	}

	public get Cargo() : string{
		return this.cargo;
	}

	public get Antiguedad() : string {
		return this.antiguedad;
	}

	public set Cargo( cargo : string){
		this.cargo = cargo;
	}

	public set Antiguedad( antiguedad : string){
		this.antiguedad = antiguedad;
	}
}

let empleado1 = new Empleado('Javier', 'Yucra', 'Administrador', '2 años');

console.log(empleado1);

console.log(empleado1.Nombre);
console.log(empleado1.Apellido);

empleado1.Nombre = 'Jose';
empleado1.Apellido = 'Castillo';

console.log(empleado1);

interface Abordar{
	abordarAvion():void;
}

let avion : Abordar = {
	abordarAvion : function(){
		console.log('Abordando avion');
	}
}

avion.abordarAvion();


let suma = function ( a : number, b : number){
	return a+b;
}

console.log(suma(7,8));


let sumaFlecha = ( a : number, b : number) =>{
	return a+b;
}

console.log(sumaFlecha(5,9));

let obtenerNombre = () => 'Javier Yucra';

console.log(obtenerNombre());


