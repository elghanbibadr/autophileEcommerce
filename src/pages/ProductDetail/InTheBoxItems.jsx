
const InTheBoxItems = (props) => {
  return (
    <div className='justify-self-center mt-10 md:mt-0' >
    <h3 className='text-paleBlack mb-6'>IN THE BOX</h3>
    <ul className='text-black'>
        {props.currentVisibleProduct.includedItems.map(({ quantity, item }, index) => {
            return <li key={index} className='flex items-center my-2 ' ><strong className='text-orange mr-4'>{quantity}x</strong><p className='text-black '>{item}</p></li>
        })}

    </ul>
</div>
  )
}

export default InTheBoxItems