import './style.css'
const app = document.getElementById('app')

//Creamos el contenedor principal
//Hacemos el ejercicio 1
const ejercicio1Content = `
<div class="ejercicio1">
  <h1 id="titulo1">EJERCICIO 1:</h1>
  <p> Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario</p>
  <input type="number" id="edad" placeholder="Ingrese tu edad">
  <button id="btn-ejercicio1">Calcular</button>
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

 // Validamos que los campos no esten vacios
  if (document.getElementById('edad').value === "") {
    document.getElementById('resultado-ejercicio1').textContent = "Por favor, ingresa tu edad.";
    return;
  }

  // Usar el operador ternario para determinar si es mayor de edad
  const mensaje = (edad >= 18) ? 'Tu eres mayor de edad.' : 'Tu eres menor de edad.';
  resultado.textContent = mensaje;
});

//Hacemos el ejercicio 2
const ejercicio2Content = `
<div class="ejercicio2">
  <h1 id="titulo2">EJERCICIO 2:</h1>
  <p>Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:</p>
  <ul>
    <li>Examen = 20%</li>
    <li>Tareas = 40%</li>
    <li>Asistencia = 10%</li>
    <li>Investigación = 30%</li>
  </ul>
  <p>Al final debera mostrar los datos del alumno, nombre, carnet y nota final</p>
  <input type="text" id="nombre" placeholder="Ingrese tu nombre">
  <input type="text" id="carnet" placeholder="Ingrese tu carnet">
  <div class="notas">
    <input type="number" id="notaExamen" placeholder="Ingrese tu nota">
    <input type="number" id="notaTareas" placeholder="Ingrese tu nota de tareas">
    <input type="number" id="notaAsistencia" placeholder="Ingrese tu nota de asistencia">
    <input type="number" id="notaInvestigacion" placeholder="Ingrese tu nota de investigación">
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

  // Validamos que los campos no esten vacios
  if (document.getElementById('nombre').value === "" || document.getElementById('carnet').value === "" || isNaN(notaExamen) || isNaN(notaTareas) || isNaN(notaAsistencia) || isNaN(notaInvestigacion)) {
    document.getElementById('resultado-ejercicio2').textContent = "Por favor, completa todos los campos.";
    return;
  }

  // Calcular la nota final
  const notaFinal = (notaExamen * 0.2) + (notaTareas * 0.4) + (notaAsistencia * 0.1) + (notaInvestigacion * 0.3);

  // Mostramos los resultados
  document.getElementById('resultadoNombre').textContent = `Nombre: ${nombre}`;
  document.getElementById('resultadoCarnet').textContent = `Carnet: ${carnet}`;
  document.getElementById('resultadoNotaFinal').textContent = `Nota Final: ${notaFinal.toFixed(2)}`;
}
);

//Hacemos el ejercicio 3
const ejercicio3Content = `
<div class="ejercicio3">
  <h1 id="titulo3">EJERCICIO 3:</h1>
  <p>Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
  Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. 
  Deberá demostrar los datos del empleado y el aumento salarial.
</p>
  <ul class="tabla-aumento">
   <li>CATEGORIA</li><li>AUMENTO</li>
   <li>A</li><li>15%</li>
   <li>B</li><li>30%</li>
   <li>C</li><li>10%</li>
   <li>D</li><li>20%</li>
  </ul>
  <input type="text" id="nombreEmpleado" placeholder="Ingrese tu nombre">
  <input type="number" id="salarioActual" placeholder="Ingrese tu salario">
  <input type="text" id="categoriaAumento" placeholder="Ingrese tu categoría segun la tabla">
  <button id="btn-ejercicio3">Calcular Aumento</button>
  <p id="resultado-ejercicio3"></p>
  <div class="resultado-empleado">
    <p id="resultadoNombreEmpleado"></p>
    <p id="resultadoSalarioActual"></p>
    <p id="resultadoAumento"></p>
    <p id="resultadoSalarioFinal"></p>
</div>
`;
// Crear el contenedor del ejercicio 3 y agregarlo al DOM
const ejercicio3Container = document.createElement('div');
ejercicio3Container.innerHTML = ejercicio3Content;
app.appendChild(ejercicio3Container);
// Agregar el evento al botón del ejercicio 3
const btnEjercicio3 = document.getElementById('btn-ejercicio3');
btnEjercicio3.addEventListener('click', () => {
  const nombreEmpleado = document.getElementById('nombreEmpleado').value;
  const salarioActual = parseFloat(document.getElementById('salarioActual').value);
  const categoriaAumento = document.getElementById('categoriaAumento').value.toUpperCase();

  // Validamos que los campos no esten vacios
  if (document.getElementById('nombreEmpleado').value === "" || document.getElementById('salarioActual').value === "" || document.getElementById('categoriaAumento').value === "") {
    document.getElementById('resultado-ejercicio3').textContent = "Por favor, completa todos los campos.";
    return;
  }

  let aumento = 0;

  // Determinar el aumento
  switch (categoriaAumento) {
    case 'A':
      aumento = salarioActual * 0.15;
      break;
    case 'B':
      aumento = salarioActual * 0.30;
      break;
    case 'C':
      aumento = salarioActual * 0.10;
      break;
    case 'D':
      aumento = salarioActual * 0.20;
      break;
    default:
      alert('Categoría no válida. Por favor, ingrese A, B, C o D.');
      return;
  }

  const salarioFinal = salarioActual + aumento;

  // Mostramos los resultados
  document.getElementById('resultadoNombreEmpleado').textContent = `Nombre: ${nombreEmpleado}`;
  document.getElementById('resultadoSalarioActual').textContent = `Salario Actual: $${salarioActual.toFixed(2)}`;
  document.getElementById('resultadoAumento').textContent = `Aumento: $${aumento.toFixed(2)}`;
  document.getElementById('resultadoSalarioFinal').textContent = `Salario Final: $${salarioFinal.toFixed(2)}`;
});

//Hacemos el ejercicio 4
const ejercicio4Content = `
<div class="ejercicio4">
  <h1 id="titulo4">EJERCICIO 4:</h1>
  <p>Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.</p>
  <input type="number" id="numero1" step="1" placeholder="Ingrese el primer número">
  <input type="number" id="numero2" step="1" placeholder="Ingrese el segundo número">
  <button id="btn-ejercicio4">Mostrar el numero mayor</button>
  <p id="resultado-ejercicio4"></p>
  <div class="resultado-numeros">
    <p id="resultadoNumeroMayor"></p>
</div>
`;

// Crear el contenedor del ejercicio 4 y agregarlo al DOM
const ejercicio4Container = document.createElement('div');
ejercicio4Container.innerHTML = ejercicio4Content;
app.appendChild(ejercicio4Container);
// Agregar el evento al botón del ejercicio 4
const btnEjercicio4 = document.getElementById('btn-ejercicio4');
btnEjercicio4.addEventListener('click', () => {
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);

    // Validamos que los campos no esten vacios
  if (document.getElementById('numero1').value === "" || document.getElementById('numero2').value === "") {
    document.getElementById('resultado-ejercicio4').textContent = "Por favor, ingresa ambos números.";
    return;
  }

   // Validamos que sean numero enteros
  if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
    document.getElementById('resultado-ejercicio4').textContent = "Solo se permiten números enteros";
    return;
  }

  // Determinar el número mayor
  const numeroMayor = (numero1 > numero2) ? numero1 : numero2;

  // Mostramos el resultado
  document.getElementById('resultadoNumeroMayor').textContent = `El número mayor es: ${numeroMayor}`;
});

