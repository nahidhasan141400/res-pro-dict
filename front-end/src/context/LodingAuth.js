// import axios from "axios";
import React, { createContext, useContext, useState } from 'react';

export const LoadContext = createContext();

// custom houk
export function useLoad(){
    return useContext(LoadContext);
}

const LoadCont = ({children}) => {

    let [loading,setLoading] = useState(false);
    
  const value ={
    loading,setLoading
  }
  
  return (
    <LoadContext.Provider value={value}>
        {children}
    </LoadContext.Provider>
  )
}

export default LoadCont;