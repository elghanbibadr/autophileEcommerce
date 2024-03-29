import IncreaseQuantityBox from '../../componenet/UI/IncreaseQuantityBox';
import Btn from '../../componenet/UI/Btn';
import GoBackLink from '../../componenet/UI/GoBackLink';

const ProductIntro = (props) => {

    return (
            <div className=' md:grid md:grid-cols-2 '>
                <div className='w-[80%]'>
                    <GoBackLink />
                    <img className='mx-auto my-10' src={props.currentVisibleProduct.image.mobile} alt="current product selected image" />
                </div>
                <div className='self-center'>
                    {props.currentVisibleProduct.new && <span className='text-orange tracking-[0.62rem] font-light uppercase'> new product </span>}
                    <h3 className='text-black leading-[1.4] font-bold mt-4 mb-2'>{props.currentVisibleProduct.name}</h3>
                    <p className='text-black mb-6'>{props.currentVisibleProduct.description}</p>
                    <h5 className='text-black text-[1.2rem] my-8 font-bold'>${props.currentVisibleProduct.price}</h5>
                    <div className='flex items-center'>
                        <IncreaseQuantityBox handleItemQuantityChanged={props.handleItemQuantityChanged} itemNumber={1} />
                        <div onClick={props.handleProductAddedToCart}>
                            <Btn className='bg-orange mx-4 text-white hover:bg-orangePale' text="ADD TO CART" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductIntro