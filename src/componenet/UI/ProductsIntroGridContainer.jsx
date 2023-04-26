import headphoneImg from "../../../public/images/shared/desktop/image-headphones.png"
import speakerImg from "../../../public/images/shared/desktop/image-speakers.png"
import earhphoneImg from "../../../public/images/shared/desktop/image-earphones.png"
import ProductIntroCard from './ProductIntroCard'
const productData=[
  {
  id:1,
  name:"headphones",
  img:headphoneImg
},
  {
  id:2,
  name:"speakers",
  img:speakerImg
},
  {
  id:3,
  name:"earphones",
  img:earhphoneImg
},
]

const ProductsIntroGridContainer = (props) => {


  return (
    <ul className={`${props.className}  bg-white p-6 mt-6  flex flex-col md:flex-row   gap-x-4 lg:gap-x-10' `} >
    {productData.map(({id,name,img})=>{
     return <ProductIntroCard key={id} name={name} img={img} />
    })}  
    </ul>
  )
}

export default ProductsIntroGridContainer