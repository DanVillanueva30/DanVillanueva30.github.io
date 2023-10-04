// Fetch API

async function listaProductos () {
  try {
    const respuesta = await fetch('https://fake-api-gamma.vercel.app/productos');

    const datos = await respuesta.json(respuesta);
    return datos; 
  } 
 
  catch(error) {
    console.log(error)
  }
}

const crearProducto = (nombre, imagen, precio, categoria) => {
    return fetch('https://fake-api-gamma.vercel.app/productos', {
        method: 'POST',
        headers: { //En el encabezado le indicamos al servidor que tipo de archivo es el que va a recibir
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, imagen, precio, categoria, id: uuid.v4()})//En el objeto dentro de body nosotros vamos a poner toda la información que queremos que se envíe dentro del cuerpo de la petición, Formateamos la información y la convertimos a texto para que la pueda enviar HTTP
    })
}
const infoProducto = async (id) => {
    try {
      const respuesta = await fetch(`https://fake-api-gamma.vercel.app/productos/${id}`);
      if (!respuesta.ok) {
        throw new Error(`La solicitud falló con estado ${respuesta.status}`);
      }
  
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error(error);
    }
  };
  
const actualizarProducto = (nombre, imagen, precio, categoria, id) => {
    return fetch(`https://fake-api-gamma.vercel.app/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({nombre, imagen, precio, categoria})
    })
    .then( respuesta => respuesta).catch(err => console.log(err));
}

//Eliminamos de la db de acurdo al id
const eliminarProducto = (id) => {
  return fetch(`https://fake-api-gamma.vercel.app/productos/${id}`, {
    method: 'DELETE'
  });
}

export const ClientServices = {
    listaProductos,
    crearProducto,
    infoProducto,
    actualizarProducto,
    eliminarProducto
}