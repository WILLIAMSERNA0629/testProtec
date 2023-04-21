import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProductTable({products}){
    return (
        <>

        <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item)=>(
          <tr>
            <th scope="row">{item.title}</th>
            <td><img src={item.image} width='20px' alt='Imagen de producto'/></td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><FontAwesomeIcon icon="fa-solid fa-trash-can-xmark" />x</td>
          </tr>   
            )
        )}
          </tbody>
        </table>
      </>
    )
}

export default ProductTable