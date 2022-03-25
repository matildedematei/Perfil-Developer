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
    datosPersona.nombre = prompt("Ingresa tu nombre");
    let nacimiento = parseInt(prompt("Ingresa el año en que naciste"));
    datosPersona.edad = 2022 - nacimiento;
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  
    datosPersona.js = confirm("Te interesa JavaScript?");
    if(datosPersona.js == true){
      datosPersona.js = "Si";
    } else{
      datosPersona.js = "No";
    }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreIngresado = datosPersona.nombre;
  const spanNombre = document.querySelector("#nombre");
  spanNombre.innerText=nombreIngresado;

  const edadIngresada = datosPersona.edad;
  const spanEdad = document.querySelector("#edad");
  spanEdad.innerText= edadIngresada;

  const ciudadIngresada = datosPersona.ciudad;
  const spanCiudad = document.querySelector("#ciudad");
  spanCiudad.innerText= ciudadIngresada;

  
  const jsIngresado = datosPersona.js;
  const spanJs = document.querySelector("#javascript");
  spanJs.innerText = jsIngresado;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const idMaterias = document.getElementById("fila");
  idMaterias.innerHTML = "";
  for(const i of listado) {
    idMaterias.innerHTML += `
    <div class="caja">
    <img src="${i.imgUrl}" alt="${i.lenguajes}">
    <p class="lenguajes"> Lenguajes:
    ${i.bimestre}</p>
    </div>`
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const tema = document.querySelector("#sitio");
  const temaOscuro = tema.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.onkeydown = function(event) {
  let letra = event.key;
  if(letra == "f"){
    let texto = document.querySelector("#sobre-mi");
    texto.classList.remove('oculto');
  } else{
  }
}