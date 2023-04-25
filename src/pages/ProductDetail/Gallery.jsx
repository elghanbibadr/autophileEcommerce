import React,{useEffect,useState} from 'react'

const Gallery = ({currentVisibleProduct}) => {
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

  return (
    <div className='mt-36 xs2:grid xs2:grid-cols-2 max-w-[1000px] mx-auto  xs2:gap-6'>
    <img className='rounded-md ' src={windowWidth < 460 ? currentVisibleProduct.gallery.first.mobile : windowWidth < 1024 ? currentVisibleProduct.gallery.first.tablet : currentVisibleProduct.gallery.first.desktop} />
    <img className='rounded-md my-4 xs2:my-0 ' my-2 src={windowWidth < 460 ? currentVisibleProduct.gallery.second.mobile : windowWidth < 1024 ? currentVisibleProduct.gallery.second.tablet : currentVisibleProduct.gallery.second.desktop} />
    <img className='row-start-1 mx-auto   row-span-2 col-start-2 w-full h-full object-cover rounded-md' src={windowWidth < 460 ? currentVisibleProduct.gallery.third.mobile : windowWidth < 1024 ? currentVisibleProduct.gallery.third.tablet : currentVisibleProduct.gallery.third.desktop} />
</div>
  )
}

export default Gallery