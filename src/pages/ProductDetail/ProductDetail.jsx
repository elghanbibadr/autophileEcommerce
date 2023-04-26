import { useParams, Link } from 'react-router-dom';
import { useState, useContext ,useEffect} from 'react';
import Container from '../../componenet/UI/Container';
import { products } from '../../data/Product';
import { AppContext } from '../../store/AppContext';
import useWindowWidth from '../../CustomHooks/UseWindowWidth';
import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer';
import ProductIntro from './ProductIntro';
import Features from './Features';
import InTheBoxItems from './InTheBoxItems';
import Gallery from './Gallery';
import OtherProducts from './OtherProducts';
import AddedItemToCartMessage from '../../componenet/UI/AddedItemToCartMessage';

function ProductDetails() {
    const { slug } = useParams();
    const windowWidth=useWindowWidth();
    const { SetItemInCardNumber, setAddedItemsToCard, addedItemsToCard, newItemAddedToCart ,setNewItemAddedToCart  } = useContext(AppContext)
    const [quantity, setQuantity] = useState(undefined)
    const currentVisibleProduct = products.find(p => p.slug === slug);
   const ItemName=currentVisibleProduct.name;


    useEffect(() => {
        const totalQuantity = addedItemsToCard.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);

        SetItemInCardNumber(totalQuantity)

    }, [addedItemsToCard])

    const handleItemQuantityChanged = (value) => setQuantity(value);

    const handleProductAddedToCart = () => {
     setNewItemAddedToCart(true)
        if (addedItemsToCard.some(product => product.id == currentVisibleProduct.id)) {
            let index = addedItemsToCard.findIndex(obj => obj.id === currentVisibleProduct.id);
            addedItemsToCard[index].quantity = quantity;
            const totalQuantity = addedItemsToCard.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0);

            SetItemInCardNumber(totalQuantity)
            return
        }
        setAddedItemsToCard(prv => [...prv, { ...currentVisibleProduct, quantity: quantity }])
    }


  
  

    return (
            <Container >
                {newItemAddedToCart && <AddedItemToCartMessage ItemName={ItemName} />}
                <ProductIntro currentVisibleProduct={currentVisibleProduct} handleProductAddedToCart={handleProductAddedToCart} handleItemQuantityChanged={handleItemQuantityChanged} />
                <div className='md:grid md:grid-cols-2 mt-20 max-w-[1000px] mx-auto '>
                    <Features currentVisibleProduct={currentVisibleProduct} />
                    <InTheBoxItems currentVisibleProduct={currentVisibleProduct} />
                </div>
                <Gallery currentVisibleProduct={currentVisibleProduct} windowWidth={windowWidth} />
                <OtherProducts currentVisibleProduct={currentVisibleProduct} slug={slug} windowWidth={windowWidth} />
                <ProductsIntroGridContainer className='flex mt-[2rem] ' />
            </Container>
    );
}


export default ProductDetails