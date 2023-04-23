import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [itemInCardNumber, SetItemInCardNumber] =useState(0)
  const [addedItemsToCard,setAddedItemsToCard]=useState([]) 
  const [backdropIsOpen,setBackdropIsOpen] = useState(false)
  const [itemQuantity,setItemQuantity]=useState(0)

  const value = {
   itemInCardNumber,
   SetItemInCardNumber,
   addedItemsToCard,
   setAddedItemsToCard,
  itemQuantity,
  setItemQuantity,
  backdropIsOpen,
  setBackdropIsOpen

  }

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}