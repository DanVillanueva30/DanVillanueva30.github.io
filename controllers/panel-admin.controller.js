
import { ClientServices } from "../service/client-service.js";
ClientServices.listaProductos().then( data => {


    //Iteramos sobre cada producto para poder mostrarlo en el div correspondiente
    data.forEach(producto => {

        mostrarProductos(producto);
    })
})

function mostrarProductos(producto) {
    const {nombre, precio, imagen, id, categoria } = producto;
    const divTodosLosProductos = document.querySelector('.todos-los-productos__grid');


    //Div individual para cada producto
    const productoDiv = document.createElement('DIV');
    productoDiv.classList.add('producto', 'producto--todos')

    productoDiv.innerHTML = `
        <div class="producto__image">
            <img src="${imagen}" alt="Imagen Producto" class="producto__img">
            <div class="producto__icons">
                <button class="producto__btn-eliminar" type="button" id=${id}>
                    <img src="assets/borrar-icon.svg" alt="Icono borrar" class="producto__png" id="icono-borrar">
                </button>
                <a href="editar-producto.html?id=${id}" class="producto__btn-editar">
                    <img id=${id} src="assets/edit-icon.svg" alt="Icono Editar" class="producto__png" id="icono-editar">
                </a>
            </div>
        </div>
        <p class="producto__nombre">${nombre}</p>
        <p class="producto__precio">R$ ${precio}</p>
        <span class="producto__categoria--span">Categoría: <p class="producto__categoria">${categoria}</p></span>
        <a href="#" class="producto__link">Ver producto</a>
    `;

    divTodosLosProductos.appendChild(productoDiv);
    // console.log(productoDiv);

    const botones = document.querySelectorAll('.producto__btn-eliminar');
    botones.forEach( boton => {
        boton.addEventListener('click', () => {
            const id = boton.id;

            ClientServices.eliminarProducto(id).then(() => {}).catch(err => console.log(err));
        })
    })
}
