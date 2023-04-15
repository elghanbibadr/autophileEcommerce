import { createContext, useState, useEffect } from "react";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [itemInCardNumber, SetItemInCardNumber] =useState(0)
  const [addedItemsToCard,setAddedItemsToCard]=useState([]) 
  const value = {
   itemInCardNumber,
   SetItemInCardNumber,
   addedItemsToCard,
   setAddedItemsToCard
  }

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}