import { useParams, Link } from 'react-router-dom';
import { useState, useContext ,useEffect} from 'react';
import Container from '../../componenet/UI/Container';
import { products } from '../../data/Product';
import { AppContext } from '../../store/AppContext';
import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer';
import ProductIntro from './ProductIntro';
import Features from './Features';
import InTheBoxItems from './InTheBoxItems';
import Gallery from './Gallery';
import OtherProducts from './OtherProducts';

function ProductDetails() {
    const { slug } = useParams();
    const { SetItemInCardNumber, setAddedItemsToCard, addedItemsToCard } = useContext(AppContext)
    const [quantity, setQuantity] = useState(undefined)
    const currentVisibleProduct = products.find(p => p.slug === slug);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const totalQuantity = addedItemsToCard.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);

        SetItemInCardNumber(totalQuantity)

    }, [addedItemsToCard])

    const handleItemQuantityChanged = (value) => setQuantity(value);

    const handleProductAddedToCart = () => {

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
        <>
            <Container className="p-6 ">
                <ProductIntro currentVisibleProduct={currentVisibleProduct} handleProductAddedToCart={handleProductAddedToCart} handleItemQuantityChanged={handleItemQuantityChanged} />
                {/* <div className='md:grid md:grid-cols-2 '>
                    <img className='w-[80%] mx-auto mb-10' src={currentVisibleProduct.image.mobile} />
                    <div className='self-center'>
                        {currentVisibleProduct.new && <span className='text-orange tracking-[0.62rem] font-light uppercase'> new product </span>}
                        <h3 className='text-black leading-[1.4] font-bold mt-4 mb-2'>{currentVisibleProduct.name}</h3>
                        <p className='text-black mb-6'>{currentVisibleProduct.description}</p>
                        <h5 className='text-black text-[1.2rem] my-8 font-bold'>${currentVisibleProduct.price}</h5>
                        <div className='flex items-center'>
                            <IncreaseQuantityBox handleItemQuantityChanged={handleItemQuantityChanged} itemNumber={1} />
                            <div onClick={handleProductAddedToCart}>
                                <Btn className='bg-orange mx-4 text-white' text="ADD TO CART" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='md:grid md:grid-cols-2 mt-20 max-w-[1000px] mx-auto '>
                    <Features currentVisibleProduct={currentVisibleProduct} />
                    <InTheBoxItems currentVisibleProduct={currentVisibleProduct} />
                </div>
               
                <Gallery currentVisibleProduct={currentVisibleProduct} windowWidth={windowWidth} />
                <OtherProducts currentVisibleProduct={currentVisibleProduct} slug={slug} windowWidth={windowWidth} />
                <ProductsIntroGridContainer className='flex mt-[8rem] ' />
            </Container>
        </>
    );
}


export default ProductDetails