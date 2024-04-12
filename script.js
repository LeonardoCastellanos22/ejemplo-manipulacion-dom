
// Leyendo HTML desde JavaScript
// Estas funciones las da el navegador o el entorno de ejecución, para usarlas sin necesidade de crearlas, sólo sirve si se ejecuta en el navegador en lugar de NodeJS

const h1 = document.querySelector('h1') //Seleccionamos la etiqueta específica
const p = document.querySelector('p') //Seleccionamos la etiqueta específica
const pAll = document.querySelectorAll('p') //Lista de todos los párrafos
const parrafito = document.querySelector('.parrafito') //Seleccionamos la clase específica
const pid = document.querySelector('#pid') //Seleccionamos la clase específica
const input = document.querySelector('input')

console.log({ //Se imprimen todas las variables, tanto el nombre como el contenido
    h1, //Es un objeto y se pueden acceder a dichas propiedades
    p,
    parrafito,
    pid,
    input
})

// Cambiando el HTML desde JavaScript

h1.innerHTML = 'Cambiando <br> titulo' //El elemento innerHTML nos permite modificar el elemento seleccionado, también se pueden escribir las etiquetas
h1.innerText = 'Cambiand <br> titul' //Lo interpreta sólo como texto
h1.getAttribute('pantalla') //Lee los atributos del elemento (clases)
console.log(h1.getAttribute('pantalla')) //Lee los atributos del elemento (clases)
h1.setAttribute('pantalla','nestel') //Se cambia el atributo de las clases
h1.classList.add('rojo') // Se le agrega una CLASE al elemento con JS
h1.classList.remove('rojo') // Se le remueve una CLASE al elemento con JS
h1.classList.toggle('rojo') // Se hace switch una CLASE al elemento con JS
h1.classList.contains('rojo') // Devuelve true o false si la clase se encuentra en el elemento
input.value = "456" //Se modifica el valor por defecto

const img = document.createElement('img') //Creamos el elemento HTML que necesitemos
img.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif')
console.log(img)

pid.replaceWith(img) //Insertamos el elemento dentro de un contenedor que ya existia

// Escuchando Eventos Desde JS

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')
const form = document.querySelector('#form')

btn.addEventListener('click', btnOnClick) //Escucha cada vez que suceda cierto evento
                                          // Se envía el evento que queremos escuchar, en este caso click y al lado la función que se ejecuta       
                                          // Forma más limpia de llamar los eventos

form.addEventListener('submit', btnOnClick) //El evento de submit recarga la página automáticamente, en cambio el evento button ejecuta el evento click
function btnOnClick(event) {
    console.log({event})
    event.preventDefault() // Previene que se recargue la página automáticamente
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    result.innerText =  `Resultado : ${sumaInputs}` 

}










