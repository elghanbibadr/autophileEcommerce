import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);

const itemsFromLocalStorage =JSON.parse(localStorage.getItem("addedItemsToCart") || [])

export const AppContextProvider = ({ children }) => {
  const [addedItemsToCard,setAddedItemsToCard]=useState(itemsFromLocalStorage) 
  const numberOfItemsInCart=  addedItemsToCard.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const [itemInCardNumber, SetItemInCardNumber] =useState(numberOfItemsInCart)
  const [backdropIsOpen,setBackdropIsOpen] = useState(false)
  const [cartOpen,setCartOpen]=useState(false)
  const [itemQuantity,setItemQuantity]=useState(0)
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

  useEffect(()=>{
    localStorage.setItem('addedItemsToCart', JSON.stringify(addedItemsToCard))
},[addedItemsToCard,itemInCardNumber])


  const value = {
   itemInCardNumber,
   SetItemInCardNumber,
   addedItemsToCard,
   setAddedItemsToCard,
  itemQuantity,
  setItemQuantity,
  backdropIsOpen,
  setBackdropIsOpen,
  ProductsIntroGridContainerOpen,
  setProductIntroGridContainerOpen,
  cartOpen,
  setCartOpen

  }

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}