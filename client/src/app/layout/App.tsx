
import { useEffect, useState } from 'react'
import './styles.css'
import { Product } from '../models/products';
import Catalog from '../../features/catalog/Catalog';
import { Typography } from '@mui/material';


function App() {
  const [products, setProducts ] = useState<Product[]>([ ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  //[] adding as dependency prevents endless loop

  function addProducts() {
    setProducts(prevState => [...prevState,
      {
          id: prevState.length+101,
          name:'product' + (prevState.length + 1),
          price: (prevState.length * 100) + 100,
          brand: 'some brand',
          description: 'some description',
          pictureUrl: 'http://picsum.photos/313'

      }])
  }
  return (
    <>
      <Typography variant='h1'> Store</Typography>
      <Catalog products = {products} addProducts={addProducts}/>  
    </>
  )
}

export default App
