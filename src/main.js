import './style.css'
const app = document.getElementById('app')

//Creamos el contenedor principal
//Hacemos el ejercicio 1
const ejercicio1Content = `
<div class="ejercicio1">
  <h1 id="titulo1">Ejercicio 1:</h1>
  <p> Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario</p>
  <input type="number" id="edad" placeholder="Ingrese su edad">
  <button id="btn-ejercicio1">Coloca tu edad</button>
  <p id="resultado-ejercicio1"></p>
</div>
`;

// Crear el contenedor del ejercicio 1 y agregarlo al DOM
const ejercicio1Container = document.createElement('div');
ejercicio1Container.innerHTML = ejercicio1Content;
app.appendChild(ejercicio1Container);

// Agregar el evento al botón del ejercicio 1
const btnEjercicio1 = document.getElementById('btn-ejercicio1');
btnEjercicio1.addEventListener('click', () => {
  const edad = parseInt(document.getElementById('edad').value);
  const resultado = document.getElementById('resultado-ejercicio1');

  // Usar el operador ternario para determinar si es mayor de edad
  const mensaje = (edad >= 18) ? 'Tu eres mayor de edad.' : 'Tu eres menor de edad.';
  resultado.textContent = mensaje;
});

//Hacemos el ejercicio 2
const ejercicio2Content = `
<div class="ejercicio2">
  <h1 id="titulo2">Ejercicio 2:</h1>
  <p>Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:</p>
  <ul>
    <li>Examen = 20%</li>
    <li>Tareas = 40%</li>
    <li>Asistencia = 10%</li>
    <li>Investigación = 30%</li>
  </ul>
  <p>Al final debera mostrar los datos del alumno, nombre, carnet y nota final</p>
  <input type="text" id="nombre" placeholder="Ingrese su nombre">
  <input type="text" id="carnet" placeholder="Ingrese su carnet">
  <div class="notas">
    <input type="number" id="notaExamen" placeholder="Ingrese su nota">
    <input type="number" id="notaTareas" placeholder="Ingrese su nota de tareas">
    <input type="number" id="notaAsistencia" placeholder="Ingrese su nota de asistencia">
    <input type="number" id="notaInvestigacion" placeholder="Ingrese su nota de investigación">
  </div>
  <button id="btn-ejercicio2">Calcular Nota</button>
  <p id="resultado-ejercicio2"></p>
  <div class="resultado-alumno">
    <p id="resultadoNombre"></p>
    <p id="resultadoCarnet"></p>
    <p id="resultadoNotaFinal"></p>
  </div>
</div>
`;

// Crear el contenedor del ejercicio 2 y agregarlo al DOM
const ejercicio2Container = document.createElement('div');
ejercicio2Container.innerHTML = ejercicio2Content;
app.appendChild(ejercicio2Container);

// Agregar el evento al botón del ejercicio 2
const btnEjercicio2 = document.getElementById('btn-ejercicio2');

btnEjercicio2.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const carnet = document.getElementById('carnet').value;
  const notaExamen = parseFloat(document.getElementById('notaExamen').value);
  const notaTareas = parseFloat(document.getElementById('notaTareas').value);
  const notaAsistencia = parseFloat(document.getElementById('notaAsistencia').value);
  const notaInvestigacion = parseFloat(document.getElementById('notaInvestigacion').value);

  // Calcular la nota final
  const notaFinal = (notaExamen * 0.2) + (notaTareas * 0.4) + (notaAsistencia * 0.1) + (notaInvestigacion * 0.3);

  // Mostramos los resultados
  document.getElementById('resultadoNombre').textContent = `Nombre: ${nombre}`;
  document.getElementById('resultadoCarnet').textContent = `Carnet: ${carnet}`;
  document.getElementById('resultadoNotaFinal').textContent = `Nota Final: ${notaFinal.toFixed(2)}`;
}
);
