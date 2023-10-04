import { ClientServices } from "../service/client-service.js";

const formulario = document.querySelector('#agregar-produto');

formulario.addEventListener('submit', recibirDatos);

function recibirDatos(e) {
    e.preventDefault();

    const imagen = document.querySelector('#url').value;
    const categoria = document.querySelector('#categoria').value;
    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;

    ClientServices.crearProducto(nombre, imagen, precio, categoria).then(respuesta => {
        window.location.href= './producto-agregado.html';
    }).catch(error => console.log(error));
}