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

