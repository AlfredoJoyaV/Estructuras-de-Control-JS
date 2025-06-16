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

//Hacemos el ejercicio 5
const ejercicio5Content = `
<div class="ejercicio5">
  <h1 id="titulo5">EJERCICIO 5:</h1>
  <p>Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta
  es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, 
  el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche 
  seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.</p>
  <p>El precio original del coche es de $10,000.00</p>
  <select id="cocheSeleccionado">
    <option value="Ford Fiesta">FORD FIESTA</option>
    <option value="Ford Focus">FORD FOCUS</option>
    <option value="Ford Escape">FORD ESCAPE</option>
  </select>
  <button id="btn-ejercicio5">Calcular total a pagar</button>
  <p id="resultado-ejercicio5"></p>
</div>
`;
// Crear el contenedor del ejercicio 5 y agregarlo al DOM
const ejercicio5Container = document.createElement('div');
ejercicio5Container.innerHTML = ejercicio5Content;
app.appendChild(ejercicio5Container);

// Agregar el evento al botón del ejercicio 5
const btnEjercicio5 = document.getElementById('btn-ejercicio5');
btnEjercicio5.addEventListener('click', () => {
  const cocheSeleccionado = document.getElementById('cocheSeleccionado').value;

  let descuento = 0;
  switch (cocheSeleccionado) {
    case 'Ford Fiesta':
      descuento = 0.05;
      break;
    case 'Ford Focus':
      descuento = 0.1;
      break;
    case 'Ford Escape':
      descuento = 0.2;
      break;
  }

  const precioOriginal = 10000
  const totalAPagar = precioOriginal - (precioOriginal * descuento);

  // Mostrar el resultado
  document.getElementById('resultado-ejercicio5').textContent = `El total a pagar por el coche ${cocheSeleccionado} es: $ ${totalAPagar.toLocaleString('en-US', { minimumFractionDigits: 2})}`;
});

//Hacemos el ejercicio 6
const ejercicio6Content = `
<div class="ejercicio6">
  <h1 id="titulo6">EJERCICIO 6:</h1>
  <p>Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:</p>
  <P>Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento 
  será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo 
  el descuento será del 15%.</P>
  <p>El precio del viaje es de $100.00</p>
  <select id="origen">
    <option value="La Palma">La Palma</option>
    <option value="La Libertad">La Libertad</option>
    <option value="Usulutan">Usulutan</option>
    <option value="Santa Elena">Santa Elena</option>
    <option value="Santa Maria">Santa Maria</option>
  </select>
  <select id="destino">
    <option value="La Costa del Sol">La Costa del Sol</option>
    <option value="Panchimalco">Panchimalco</option>
    <option value="Puerto el Triunfo">Puerto el Triunfo</option>
    <option value="Santa Ana">Santa Ana</option>
    <option value="San Miguel">San Miguel</option>
  </select>
  <button id="btn-ejercicio6">Calcular Descuento</button>
  <p id="resultado-ejercicio6"></p>
  <div class="resultado-viaje">
    <p id="resultadoOrigen"></p>
    <p id="resultadoDestino"></p>
    <p id="resultadoDescuento"></p>
    <p id="resultadoTotalAPagar"></p>
</div>
`;
// Crear el contenedor del ejercicio 6 y agregarlo al DOM
const ejercicio6Container = document.createElement('div');
ejercicio6Container.innerHTML = ejercicio6Content;
app.appendChild(ejercicio6Container);

// Agregar el evento al botón del ejercicio 6
const btnEjercicio6 = document.getElementById('btn-ejercicio6');
btnEjercicio6.addEventListener('click', () => {
  const origen = document.getElementById('origen').value;
  const destino = document.getElementById('destino').value;

  let descuento = 0;
  if (origen === 'La Palma' && destino === 'La Costa del Sol') {
    descuento = 0.05;
  } else if (origen === 'La Palma' && destino === 'Panchimalco') {
    descuento = 0.1;
  } else if (origen === 'La Palma' && destino === 'Puerto el Triunfo') {
    descuento = 0.15;
  }

  const precioViaje = 100;
  const totalAPagar = precioViaje - (precioViaje * descuento);

  // Mostrar el resultado
  document.getElementById('resultadoOrigen').textContent = `Origen: ${origen}`;
  document.getElementById('resultadoDestino').textContent = `Destino: ${destino}`;
  document.getElementById('resultadoDescuento').textContent = `Descuento aplicado: ${(descuento * 100).toFixed(2)}%`;
  document.getElementById('resultadoTotalAPagar').textContent = `Total a pagar: $ ${totalAPagar.toFixed(2)}`;
});

//Hacemos el ejercicio 7
const ejercicio7Content = `
<div class="ejercicio7">
  <h1 id="titulo7">EJERCICIO 7:</h1>
  <p>Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:</p>
  <ul>
    <li>La cantidad de valores negativos ingresados</li>
    <li>La cantidad de valores positivos ingresados</li>
    <li>La cantidad de múltiplos de 15</li>
    <li>El valor acumulado de los números ingresados que son pares</li>
  </ul>
  <input type="number" id="numero" placeholder="Ingrese un número entero">
  <button id="btn-ejercicio7">Agregar Número</button>
  <p id="resultado-ejercicio7"></p>
  <div class="resultado-numeros">
    <p id="resultadoCantidadNegativos"></p>
    <p id="resultadoCantidadPositivos"></p>
    <p id="resultadoCantidadMultiplos15"></p>
    <p id="resultadoAcumuladoPares"></p>
</div>
`;
// Crear el contenedor del ejercicio 7 y agregarlo al DOM
const ejercicio7Container = document.createElement('div');
ejercicio7Container.innerHTML = ejercicio7Content;
app.appendChild(ejercicio7Container);
// Variables para almacenar los resultados
let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplos15 = 0;
let acumuladoPares = 0;
// Contador para los números ingresados
let contadorNumeros = 0;
// Agregar el evento al botón del ejercicio 7
const btnEjercicio7 = document.getElementById('btn-ejercicio7');
btnEjercicio7.addEventListener('click', () => {
  // Si ya se ingresaron 10 números, no permitir más cargas
  if (contadorNumeros >= 10) {
    document.getElementById('resultado-ejercicio7').textContent = "Su carga ha finalizado.";
    btnEjercicio7.disabled = true; // Deshabilita el botón
    return;
  }
  
  const numero = parseInt(document.getElementById('numero').value);

  // Validamos que el campo no este vacio
  if (document.getElementById('numero').value === "") {
    document.getElementById('resultado-ejercicio7').textContent = "Por favor, ingresa un número.";
    return;
  }

  // Validamos que sea un numero entero
  if (!Number.isInteger(numero)) {
    document.getElementById('resultado-ejercicio7').textContent = "Solo se permiten números enteros";
    return;
  }

  // Incrementar el contador de números ingresados
  contadorNumeros++;

  // Validamos si el numero es negativo, positivo o múltiplo de 15
  if (numero < 0) {
    cantidadNegativos++;
  } else if (numero > 0) {
    cantidadPositivos++;
  }

  if (numero % 15 === 0) {
    cantidadMultiplos15++;
  }

  // Verificar si el número es par
  if (numero % 2 === 0) {
    acumuladoPares += numero;
  }

  // Mostrar los resultados
  document.getElementById('resultadoCantidadNegativos').textContent = `Cantidad de valores negativos: ${cantidadNegativos}`;
  document.getElementById('resultadoCantidadPositivos').textContent = `Cantidad de valores positivos: ${cantidadPositivos}`;
  document.getElementById('resultadoCantidadMultiplos15').textContent = `Cantidad de múltiplos de 15: ${cantidadMultiplos15}`;
  document.getElementById('resultadoAcumuladoPares').textContent = `Valor acumulado de números pares: ${acumuladoPares}`;

  // Limpiar el campo de entrada
  document.getElementById('numero').value = '';

  // Si ya se ingresaron 10 números, mostrar mensaje y deshabilitar botón
  if (contadorNumeros >= 10) {
    document.getElementById('resultado-ejercicio7').textContent = "Su carga ha finalizado.";
    btnEjercicio7.disabled = true;
  }
});
//Hacemos el ejercicio 8
const ejercicio8Content = `
<div class="ejercicio8">
  <h1>EJERCICIO 8:</h1>
  <p>Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.</p>
  <input type="number" id="numero8" placeholder="Ingrese un número">
  <button id="btn-ejercicio8">Mostrar Tabla</button>
  <div id="resultado-ejercicio8"></div>
</div>
  `;
// Crear el contenedor del ejercicio 8 y agregarlo al DOM
const ejercicio8Container = document.createElement('div');
ejercicio8Container.innerHTML = ejercicio8Content;
app.appendChild(ejercicio8Container);
// Agregar el evento al botón del ejercicio 8
const btnEjercicio8 = document.getElementById('btn-ejercicio8');
btnEjercicio8.addEventListener('click', () => {
  const numero = parseInt(document.getElementById('numero8').value);

  // Validamos que el campo no este vacio
  if (document.getElementById('numero8').value === "") {
    document.getElementById('resultado-ejercicio8').textContent = "Por favor, ingresa un número.";
    return;
  }

  // Validamos que sea un numero entero
  if (!Number.isInteger(numero)) {
    document.getElementById('resultado-ejercicio8').textContent = "Solo se permiten números enteros";
    return;
  }

  let resultado = `<h2>Tabla de multiplicar del ${numero}:</h2>`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}<br>`;
  }

  document.getElementById('resultado-ejercicio8').innerHTML = resultado;
});

//Hacemos el ejercicio 9
const ejercicio9Content = `
<div class="ejercicio9">
 <h1>EJERCICIO 9:</h1>
 <p>Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, 
 una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente.</p>
  <ul>
    <li>Si ºF está entre 14 y 32, sale la frase “Temperatura baja”</li>
    <li>Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”</li>
    <li>Si ºF está entre 68 y 96, sale la frase “Temperatura alta”</li>
    <li>Si no está entre ningún caso anterior la frase “Temperatura desconocida”</li>
  </ul>
  <input type="number" id="temperaturaCelsius" placeholder="Ingrese temperatura en Celsius">
  <button id="btn-ejercicio9">Convertir a Fahrenheit</button>
  <p id="resultado-ejercicio9"></p>
  <div class="resultado-temperatura">
    <p id="resultadoTemperaturaFahrenheit"></p>
    <p id="resultadoRangoTemperatura"></p>
</div>
`;

// Crear el contenedor del ejercicio 9 y agregarlo al DOM
const ejercicio9Container = document.createElement('div');
ejercicio9Container.innerHTML = ejercicio9Content;
app.appendChild(ejercicio9Container);
// Agregar el evento al botón del ejercicio 9
const btnEjercicio9 = document.getElementById('btn-ejercicio9');
btnEjercicio9.addEventListener('click', () => {
  const temperaturaCelsius = parseFloat(document.getElementById('temperaturaCelsius').value);

  // Validamos que el campo no este vacio
  if (document.getElementById('temperaturaCelsius').value === "") {
    document.getElementById('resultado-ejercicio9').textContent = "Por favor, ingresa una temperatura.";
    return;
  }

  // Validamos que sea un numero
  if (isNaN(temperaturaCelsius)) {
    document.getElementById('resultado-ejercicio9').textContent = "Solo se permiten números";
    return;
  }

  // Convertir Celsius a Fahrenheit
  const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

  // Determinar el rango de temperatura
  let rangoTemperatura;
  if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
    rangoTemperatura = "Temperatura baja";
  } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
    rangoTemperatura = "Temperatura adecuada";
  } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
    rangoTemperatura = "Temperatura alta";
  } else {
    rangoTemperatura = "Temperatura desconocida";
  }

  // Mostrar los resultados
  document.getElementById('resultadoTemperaturaFahrenheit').textContent = `Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}°F`;
  document.getElementById('resultadoRangoTemperatura').textContent = `Rango de temperatura: ${rangoTemperatura}`;
});