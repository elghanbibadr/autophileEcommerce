import { useParams } from 'react-router-dom';

function ProductDetails() {
   const { id } = useParams();
   const product = products.find(p => p.id === productId);

  // Use the product ID to fetch the product data from your API or state
  // ...

  return (
    <div>
      <h2 className='text-black'>Product Details</h2>
     <h1 className='text-black'>product is <strong >{id}</strong></h1> 
      {/* Render the product details here */}
    </div>
  );
}


export default ProductDetails