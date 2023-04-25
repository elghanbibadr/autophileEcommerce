import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);

const itemsFromLocalStorage =JSON.parse(localStorage.getItem("addedItemsToCart") || [])
export const AppContextProvider = ({ children }) => {
  const [itemInCardNumber, SetItemInCardNumber] =useState(0)
  const [addedItemsToCard,setAddedItemsToCard]=useState(itemsFromLocalStorage) 
  const [backdropIsOpen,setBackdropIsOpen] = useState(false)
  const [itemQuantity,setItemQuantity]=useState(0)
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

  useEffect(()=>{
    localStorage.setItem('addedItemsToCart', JSON.stringify(addedItemsToCard))
},[addedItemsToCard,itemInCardNumber])

console.log(addedItemsToCard)

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
  setProductIntroGridContainerOpen

  }

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}