function Saludar(funcion : Function):void{
	funcion.prototype.saludos = function():void{
		console.log('Hola mundo, usando decordadores');
	}
}

@Saludar
class Hola{
	constructor(){}
}

let hola1 = new Hola();
hola1.saludos();

