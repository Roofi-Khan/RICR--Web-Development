import { createContext, useState } from "react";
export const GlobalContext=createContext();

export const GlobalProvider=({children})=>{
    const [username,setUsername]=useState("Roofi");

    
    return (
        <GlobalContext.Provider value={{
            username,setUsername
        }}>
    {children}
    </GlobalContext.Provider>
)
}