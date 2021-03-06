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
    getID('subID').style.display = "block";
    getID('subID').style.color = "red";
    getID('id').focus();
  }else if (nombre == "") {
    getID('subID').style.display = "none";
    getID('subNombre').style.display = "block";
    getID('subNombre').style.color = "red";
    getID('nombre').focus();
  }else if(apellido == ""){
    getID('subNombre').style.display = "none";
    getID('subApellido').style.display = "block";
    getID('subApellido').style.color = "red";
    getID('apellido').focus();
  }else{

    getID('subApellido').style.display = "none";
    console.log(id, nombre, apellido);

    var persona = crearObjeto(id, nombre, apellido);
    var agregarBD = firebase.database().ref('usuarios/'+id);
    agregarBD.set(persona);

    // alert('La informacion se ha guardado correctamente');
    mostrarMensaje('La informacion se ha guardado correctamente', 'success');

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
  }

  mostrarMensaje('El registro se ha eliminado correctamente', 'danger');
  setTimeout(function(){
    location.reload();
  },2000);

}

function editar( id, nombre, apellido){
  
  //console.log("click en editar");
  getID('id').value = id;
  getID('nombre').value = nombre;
  getID('apellido').value = apellido;

  mostrarMensaje('Editando la informacion de : '+nombre, 'warning');

}

function mostrarMensaje( mensaje, clase ){
  var main = document.createElement('div');
  main.className = 'alert alert-'+clase+' text-center';
  main.appendChild(document.createTextNode(mensaje));

  var container = document.querySelector('.container');
  var row = document.querySelector('.row');

  container.insertBefore(main, row);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);

}

