import React, {useState} from 'react'

function Form() {
    const [title,setTitle]=useState('initialState')
    const [descripcion,setDescripcion]=useState('initialState')
    const [price,setPrice]=useState('initialState')


    // const postRequest = async() => {
    //     try {
    //         console.log('s')
    //     //   const data = await addProduct();
    //     } catch{ console.log('error')}
    //   }    
    
    
  return (
    <form action="/my-handling-form-page" method="post">
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Producto Nuevo</h5>
        <button type="button" minlength="5" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
    <label for="producto">Nombre del Producto</label>
    <input type="text" minlength="5" class="form-control" id="producto" />   
  </div>
  <div class="form-group">
    <label for="descripcion">Descripción </label>
    <input type="text" minlength="5"class="form-control" id="descripcion"/>
  </div>
  <div class="form-group">
    <label for="precio">Precio </label>
    <input type="Number" minlength="5" class="form-control" id="precio" />
  </div> 
        
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cacelar</button>
        <button type="button" class="btn btn-primary">Agregar Producto</button>
      </div>
    </div>
  </div>
</div>
    </form>
  )
}

export default Form