//const datosPersonales=document.getElementById('datosPersonales');
//const exp=document.getElementById('botonExperiencia');
//const habilidades=document.getElementById('habilidades');

const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const nombreCompleto = document.getElementById('nombreCompleto');
const domicilio = document.getElementById('domicilio');
const edad = document.getElementById('edad');
const celular = document.getElementById('celular');


const generarUsuario = async () => {
    const url='https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    foto.src=datos.picture.medium;
    nombre.textContent=datos.name.first+" "+datos.name.last;
    email.textContent=datos.email;
    telefono.textContent=datos.phone;
    nombreCompleto.textContent=datos.name.title+" "+datos.name.first+" "+datos.name.last;
    domicilio.textContent=datos.location.street.name+" "+datos.location.street.number+", "+datos.location.city;
    edad.textContent=datos.dob.age;
    celular.textContent=datos.cell;
}

document.addEventListener('DOMContentLoaded', generarUsuario)
