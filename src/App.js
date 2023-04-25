import './App.css';
import { useEffect, useState } from 'react'
import { getProduct } from './services/getProduct'
import ProductsTable from './components/organisms/ProductsTable/ProductsTable'
import Form from './components/molecules/Form/Form'


function App() {
  const [products, setProducts] = useState([])

  const getProdutsRequest = async () => {
    try {
      const data = await getProduct();

      setProducts(data)
    } catch { console.log('error') }
  }
  useEffect(() => {
    getProdutsRequest()
  }, [])


  return (
    <div className="App">
      <h1>TIENDA VIRTUAL</h1>
      <button type="button" class="btn btn-primary buttonAdd" data-toggle="modal" data-target="#staticBackdrop">
        Agregar Producto
      </button>
      <Form />
      <ProductsTable
        products={products}
      />
    </div>
  );
}

export default App;
