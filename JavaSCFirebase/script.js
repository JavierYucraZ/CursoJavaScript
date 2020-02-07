// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCHTbw9GkD6wrfqGW_5cKzfCrKTyQTx7gw",
    authDomain: "dbjavascript-f4052.firebaseapp.com",
    databaseURL: "https://dbjavascript-f4052.firebaseio.com",
    projectId: "dbjavascript-f4052",
    storageBucket: "dbjavascript-f4052.appspot.com",
    messagingSenderId: "799378160984",
    appId: "1:799378160984:web:e9da65de98b1f889ddb92d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function agregar(){
  var id = getID('id').value;
  var nombre = getID('nombre').value;
  var apellido = getID('apellido').value;

  if (id == "") {
    alert('Debe ingresar un ID');
    getID('id').focus();
  }else if (nombre == "") {
    alert("Debe ingresar su nombre");
    getID('nombre').focus();
  }else if(apellido == ""){
    alert('Debe ingresar su apellido');
    getID('apellido').focus();
  }else{
    console.log(id, nombre, apellido);

    var persona = crearObjeto(id, nombre, apellido);
    var agregarBD = firebase.database().ref('usuarios/'+id);
    agregarBD.set(persona);

    alert('La informacion se ha guardado correctamente');

    getID('id').value = "";
    getID('nombre').value = "";
    getID('apellido').value = "";

  }

}

function crearObjeto(id, nombre, apellido){
  var datos = {
    id : id,
    nombre : nombre,
    apellido : apellido
  };
  return datos;
}


function getID( id ){
  return document.getElementById(id);
}


function crearTabla(id, nombre, apellido){
  return '<tr>'+
  '<td>'+id+'</td>'+
  '<td>'+nombre+'</td>'+
  '<td>'+apellido+'</td>'+
  '<td>'+
  '<button class="btn btn-warning btn-sm" onclick="editar('+id+',\''+nombre+'\',\''+apellido+'\')">Editar</button>'+
  '</td>'+
  '<td>'+
  '<button class="btn btn-danger btn-sm" onclick="eliminar('+id+',\''+nombre+'\',\''+apellido+'\')">Eliminar</button>'+
  '</td>'+
  '</tr>';
}

function obtenerObjetoBD(){
  var obtenerInfoBD = firebase.database().ref('usuarios/');
  obtenerInfoBD.on('child_added', function(data){
    var persona = data.val();
    var tabla = crearTabla(persona.id, persona.nombre, persona.apellido);
    innerHTML('CargarDatos', tabla);
  });
}

function innerHTML( id, contenidoTabla ){
  return getID(id).innerHTML += contenidoTabla;
}

function eliminar( id ){
  
  //console.log("click en eliminar");
  var usuario = firebase.database().ref('usuarios/'+id);

  if (confirm('Desea eliminar este registro?')) {
    usuario.remove();
    location.reload();
  }

}

function editar( id, nombre, apellido){
  
  console.log("click en editar");
  // var usuario = firebase.database().ref('usuarios/'+id);
  // usuario.remove();
}