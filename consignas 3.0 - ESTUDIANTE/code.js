/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

var nombreP = prompt("Escribe tu Nombre:","Anonimo");
datosPersona.nombre = nombreP + " ";
var añoN = prompt("Escribe tu año de Nacimiento:",2000);
datosPersona.edad = 2024 - añoN ;
var ubi = prompt("Donde vives?","USA");
datosPersona.ciudad=ubi + " ";
var gusto =confirm("Te gusta Javascrpit?",true);
if(gusto){
datosPersona.interesPorJs = "Si"}
else{
  datosPersona.interesPorJs = "No";
}
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  var h3n = document.createElement("h3");
  h3n.textContent = datosPersona.nombre;
  document.getElementById("nombre").appendChild(h3n);

  var h3e = document.createElement("h3");
  h3e.textContent = datosPersona.edad;
  document.getElementById("edad").appendChild(h3e);

  var h3c = document.createElement("h3");
  h3c.textContent = datosPersona.ciudad;
  document.getElementById("ciudad").appendChild(h3c);
  
  var h3j = document.createElement("h3");
  h3j.textContent = datosPersona.interesPorJs;
  document.getElementById("javascript").appendChild(h3j);
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
const fila = document.getElementById("fila");

listado.forEach(
listado => {
const tarjeta = document.createElement("div");
tarjeta.classList.add("caja");

const imagen = document.createElement("img");
imagen.src = listado.imgUrl;
imagen.alt = listado.lenguajes;
tarjeta.appendChild(imagen);

const lenguajesP = document.createElement("p");
lenguajesP.classList.add('lenguajes');
lenguajesP.textContent = "Lenguajes:" + listado.lenguajes;
tarjeta.appendChild(lenguajesP);

const bimestreP = document.createElement("p");
bimestreP.classList.add("bimestre");
bimestreP.textContent= "Bimestre: "+ listado.bimestre;
tarjeta.appendChild(bimestreP);

fila.appendChild(tarjeta);});
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.getElementById("sitio");
 sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

function checkKey(event){
  if (event.keyCode === 70) {
  const sobreMi = document.getElementById('sobre-mi');
  sobreMi.classList.remove('oculto');
  window.removeEventListener('keydown', manejarTeclado);
  }
}
window.addEventListener('keydown', checkKey);
