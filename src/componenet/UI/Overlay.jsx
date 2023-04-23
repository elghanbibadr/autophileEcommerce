const Overlay = (props) => {
    const hanldeOverlayClicked=(e)=>{
      if (e.target.classList.contains('backdrop')){
            props.setBackdropIsOpen(false)
        } 
    }
  return (
    <div onClick={hanldeOverlayClicked} className='bg-lightBlack fixed w-full h-full backdrop inset-0 z-50 flex'>
     {props.children}
    </div>
  )
}

export default Overlay