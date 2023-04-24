import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [itemInCardNumber, SetItemInCardNumber] =useState(0)
  const [addedItemsToCard,setAddedItemsToCard]=useState([]) 
  const [backdropIsOpen,setBackdropIsOpen] = useState(false)
  const [itemQuantity,setItemQuantity]=useState(0)
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)


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