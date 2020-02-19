"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = "";
        this.apellido = "";
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (v) {
            this.nombre = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this.apellido;
        },
        set: function (v) {
            this.apellido = v;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
var persona1 = new Persona('Javier', 'Yucra');
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, cargo, antiguedad) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.cargo = "";
        _this.antiguedad = "";
        _this.cargo = cargo;
        _this.antiguedad = antiguedad;
        return _this;
    }
    Object.defineProperty(Empleado.prototype, "Cargo", {
        get: function () {
            return this.cargo;
        },
        set: function (cargo) {
            this.cargo = cargo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "Antiguedad", {
        get: function () {
            return this.antiguedad;
        },
        set: function (antiguedad) {
            this.antiguedad = antiguedad;
        },
        enumerable: true,
        configurable: true
    });
    return Empleado;
}(Persona));
var empleado1 = new Empleado('Javier', 'Yucra', 'Administrador', '2 años');
console.log(empleado1);
console.log(empleado1.Nombre);
console.log(empleado1.Apellido);
empleado1.Nombre = 'Jose';
empleado1.Apellido = 'Castillo';
console.log(empleado1);
var avion = {
    abordarAvion: function () {
        console.log('Abordando avion');
    }
};
avion.abordarAvion();
var suma = function (a, b) {
    return a + b;
};
console.log(suma(7, 8));
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log(sumaFlecha(5, 9));
var obtenerNombre = function () { return 'Javier Yucra'; };
console.log(obtenerNombre());
