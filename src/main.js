import './style.css'
const app = document.getElementById('app')


//Creamor el contenedor principal
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
