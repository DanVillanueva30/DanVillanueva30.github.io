
import { ClientServices } from "../service/client-service.js";
ClientServices.listaProductos().then( data => {

    //Creamos un objeto con las categorias de los productos de AluraGeek
    const divsCategorias = {
        'Star Wars': document.getElementById('StarWars'),
        'Consolas': document.getElementById('Consolas'),
        'Diversos': document.getElementById('Diversos')
    };

    //Iteramos sobre cada producto para poder mostrarlo en el div correspondiente
    data.forEach(producto => {

        const categoria = producto.categoria;
        const div = divsCategorias[categoria];
        
        if(div) {
            mostrarProductos(producto, div)
        }
    })
})

function mostrarProductos(producto, div) {
    const {nombre, precio, imagen } = producto;

    //Div individual para cada producto
    const productoDiv = document.createElement('DIV');
    productoDiv.classList.add('producto')

    productoDiv.innerHTML = `
        <img src="${imagen}" alt="Imagen Producto" class="producto__img">
        <p class="producto__nombre">${nombre}</p>
        <p class="producto__precio">R$ ${precio}</p>
        <a href="#" class="producto__link">Ver producto</a>
    `;

    div.appendChild(productoDiv);
    // console.log(productoHTML);

}