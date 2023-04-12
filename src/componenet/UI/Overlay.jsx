import Cart from "./Cart"
const Overlay = (props) => {
    const hanldeOverlayClicked=(e)=>{
      if (e.target.classList.contains('backdrop')){
            props.setBackdropIsOpen(false)
        } 
    }
  return (
    <div onClick={hanldeOverlayClicked} className='bg-lightBlack fixed backdrop inset-0 z-50 flex'>
      <div className=" mt-10 "><Cart/></div>
    </div>
  )
}

export default Overlay