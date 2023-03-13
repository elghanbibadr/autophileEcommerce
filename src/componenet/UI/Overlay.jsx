
const Overlay = (props) => {
    const hanldeOverlayClicked=(e)=>{
      if (e.target.classList.contains('backdrop')){
            props.setBackdropIsOpen(false)
        } 
    }
  return (
    <div onClick={hanldeOverlayClicked} className='bg-lightBlack absolute backdrop inset-0 grid grid-cols-1 px-20  justify-center items-center'>
        {props.children}
    </div>
  )
}

export default Overlay