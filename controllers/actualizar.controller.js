import { ClientServices } from "../service/client-service.js";

//Obtiene la informacion del cliente y se rellenan los inputs con su información

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    //Redireccionamos si el sitio es nulo o no existe 
    if(id === null) {
        window.location.href = 'panel-admin.html';
    }

    //Seleccionamos los inputs del formulario 
    const imagenProducto = document.querySelector('#url');
    const categoriaProducto = document.querySelector('#categoria');
    const nombreProducto = document.querySelector('#nombre');
    const precioProducto = document.querySelector('#precio');


        // //Obtenemos la informacion del producto al que le dimos editar
        ClientServices.infoProducto(id).then( ({imagen, categoria, nombre, precio}) => {
     
            //Agremos el contenido de los inputs de acuerdo a cada id 
            imagenProducto.value = imagen;
            categoriaProducto.value = categoria;
            nombreProducto.value = nombre;
            precioProducto.value = precio;
        })
}
obtenerInformacion();

const form = document.querySelector('#editar-producto');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Reconocer que cliente vamos a actualizar
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

        //Poder capturar los valores de los inputs (En este caso ya actualizados)
    const imagenProducto = document.querySelector('#url').value;
    const categoriaProducto = document.querySelector('#categoria').value;
    const nombreProducto = document.querySelector('#nombre').value;
    const precioProducto = document.querySelector('#precio').value;


    ClientServices.actualizarProducto(nombreProducto, imagenProducto, precioProducto, categoriaProducto, id).then(() => {
         window.location.href = 'edicion-concluida.html';
     })
})